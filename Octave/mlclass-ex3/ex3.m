%% Machine Learning Online Class - Exercise 3 | Part 1: One-vs-all

%  Instructions
%  ------------
% 
%  This file contains code that helps you get started on the
%  linear exercise. You will need to complete the following functions 
%  in this exericse:
%
%     lrCostFunction.m (logistic regression cost function)
%     oneVsAll.m
%     predictOneVsAll.m
%     predict.m
%
%  For this exercise, you will not need to change any code in this file,
%  or any other files other than those mentioned above.
%

%% Initialization
clear ; close all; clc

%% Setup the parameters you will use for this part of the exercise
input_layer_size  = 400;  % 20x20 Input Images of Digits
num_labels = 10;          % 10 labels, from 1 to 10   
                          % (note that we have mapped "0" to label 10)

%% =========== Part 1: Loading and Visualizing Data =============
%  We start the exercise by first loading and visualizing the dataset. 
%  You will be working with a dataset that contains handwritten digits.
%

% Load Training Data
fprintf('Loading and Visualizing Data ...\n')

load('ex3data1.mat'); % training data stored in arrays X, y
R = randperm(size(X,1));
XTRAIN=X(R(1:4000), :);
ytrain=y(R(1:4000),:);
m = size(XTRAIN, 1);

% Randomly select 100 data points to display
sel = X(R(1:100), :);

displayData(sel);
keyboard;
fprintf('Program paused. Press enter to continue.\n');
pause;

%% ============ Part 2: Vectorize Logistic Regression ============
%  In this part of the exercise, you will reuse your logistic regression
%  code from the last exercise. You task here is to make sure that your
%  regularized logistic regression implementation is vectorized. After
%  that, you will implement one-vs-all classification for the handwritten
%  digit dataset.
%

%keyboard;
fprintf('\nTraining One-vs-All Logistic Regression...\n')

lambda = 1.5;
[all_theta] = oneVsAll(XTRAIN, ytrain, num_labels, lambda);

fprintf('Program paused. Press enter to continue.\n');
pause;

save 'all_theta' all_theta;

XC=X(R(4001:5000),:);
yc=y(R(4001:5000),:);
pred = predictOneVsAll(all_theta, XC);
m = mean(double(pred == yc)) * 100;
fprintf('\nLambda: %f, Training Set Accuracy: %f\n', lambda, m);

keyboard

%% ================ Part 3: Predict for One-Vs-All ================
%  After ...

l=[0 0.001 0.01 0.1 0.5 1 1.5 2 5 10 20 40];
mmax = 0;
lmax = 0;
for i=1:size(l,2)
	[all_theta] = oneVsAll(XTRAIN, ytrain, num_labels, l(i));
	pred = predictOneVsAll(all_theta, XC);
	m = mean(double(pred == yc)) * 100;
	if (mmax < m)
		mmax=m;
		lmax=l(i);
	endif
	fprintf('\nLambda: %f, Training Set Accuracy: %f\n', l(i), m);
end

fprintf('\nMax accuracy: %f Lambda: %f\n', mmax, lmax);