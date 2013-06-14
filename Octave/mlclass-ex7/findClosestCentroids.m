function idx = findClosestCentroids(X, centroids)
%FINDCLOSESTCENTROIDS computes the centroid memberships for every example
%   idx = FINDCLOSESTCENTROIDS (X, centroids) returns the closest centroids
%   in idx for a dataset X where each row is a single example. idx = m x 1 
%   vector of centroid assignments (i.e. each entry in range [1..K])
%

% Set K
K = size(centroids, 1);

% You need to return the following variables correctly.
idx = zeros(size(X,1), 1);

% ====================== YOUR CODE HERE ======================
% Instructions: Go over every example, find its closest centroid, and store
%               the index inside idx at the appropriate location.
%               Concretely, idx(i) should contain the index of the centroid
%               closest to example i. Hence, it should be a value in the 
%               range 1..K
%
% Note: You can use a for-loop over the examples to compute this.
%
%idx m x 1
% K=3
% m=300
% size(centroids) 3 x 2
% size(X) 300 x 2
% c (i) := j   that minimizes || x (i) - u j ||^2
X2 = sum(X .^ 2, 2); % 300x1
C2 = sum(centroids .^ 2, 2); %3x1
MUL = X * centroids'; % 300x2 * 2x3 == 300x3
S1 = X2 - (2 * MUL); %300x3
S2 = C2 + S1'; %3x300
[MIN INDEX] = min(S2', [], 2);
idx = INDEX;
size(idx)






% =============================================================

end

