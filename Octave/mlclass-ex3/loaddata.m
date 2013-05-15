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
lambda = 0.1;

m = size(X, 1);
n = size(X, 2);

% You need to return the following variables correctly 
theta = zeros(num_labels, n + 1);

% Add ones to the X data matrix
X = [ones(m, 1) X];



grad = zeros(size(theta));

H = sigmoid(X*theta');
j_ = -y' * log(H) - (1 - y)'*log(1-H);
reg = lambda/(2*m)*(theta'*theta - theta(1)^2);
J = (1/m)*j_ + reg;