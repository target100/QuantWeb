# ADMM


== Chapter 1. Basic Concepts of Convex Analysis
=== 1.1. Convex Sets and Functions
==== 1.1.1 Convex Functions
- Examples of benefit: Each /close convex set/ can be described in terms of the hyperplanes that support the set, /each point in the boundary of a convex set/ can be approached through the relative interior of the set, and /each halfline belonging to a closed convex set/ still belongs to the set when translated to start at any point in the set.

- Examples of inconvenience: However, contrary to affine and compact sets, some basic operations such as linear transformation and vector sum may not preserve the closedness of closed convex sets. This in turn complicates the treatment of some fundamental optimization issues, including the existence of optimal solutions and duality.

~~~
Definition 1.1.1: A subset $C$ of $\mathbb{R}^n$ is called /convex/ if
\(
	\begin{align}
		\alpha x + (1 - \alpha)y \in C, ~~~ \forall x, y \in C, ~~ \forall \alpha \in [0,1].
	\end{align}
\)
~~~

Note that the empty set is by convention convex.

~~~
Definition:
- We say that $x$ is a /closure point/ of a subset $X$ of $\mathbb{R}^n$ if there exists a sequence $\{x_k\} \subset X$ that converges to $x$. The /closure/ of $X$, denoted $cl(X)$, is the set of all closure points of $X$.
- A vector $x \in cl(X)$ which is not an interior point of $X$ is said to be a /boundary point/ of $X$. The set of all boundary points of $X$ is called the /boundary/ of $X$.
- We say that $x$ is a /interior point/ of a subset $X$ of $\mathbb{R}^n$ if there exists a neighborhood of $x$ that is contained in $X$. The /interior/ of $X$, denoted $int(X)$, is the set of all interior points of $X$.
- A subset $X$ of $\mathbb{R}^n$ is called /closed/ if it is equal to its closure. It is called /open/ if its complement, $\{x | x \in X\}$, is closed.
- It is called /bounded/ if there exists a scalar $c$ such that $\|x\| \le c$ for all $x \in X$.
- It is called /compact/ if it is closed and bounded.
~~~

~~~
Proposition 1.1.1:
- The intersection $\cap_{i \in I} C_i$ of any collection $\{C_i | i \in I\}$ of convex sets is convex.
- The vector sum $C_1 + C_2$ of two convex sets $C_1$ and $C_2$ is convex.
- The set $\lambda C$ is convex for any convex set $C$ and scalar $\lambda$. Furthermore, if $C$ is a convex set and $\lambda_1, \lambda_2$ are positive scalars, $(\lambda_1+\lambda_2)C = \lambda_1 C + \lambda_2 C$.
- The closure and the interior of a convex set are convex.
- The image and the inverse image of a convex set under an affine function are convex.
~~~

~~~
Definition: suppose $a$ is a nonzero vector and $b$ is a scalar.
- A /hyperplane/ is a set specified by a single linear equation, i.e., a set of the form $\{x | a'x = b\}$.
- A /halfspace/ is a set specified by a single linear inequality, i.e., a set of the form $\{x | a'x \le b\}$.
- A set is said to be /polyhedral/ if it is nonempty and it is the intersection of a finite number of halfspaces, i.e., $\{x | a'_j x \le b_j, j= 1, \cdots, r\}$.
- A set $C$ is said to be a /cone/ if for all $x \in C$ and $\lambda > 0$, we have $\lambda x \in C$.
- A /polyhedral cone/ is a set of the form $C = \{x | a'_j x \le 0, j = 1, \cdots, r\}$, where $a_1, \cdots, a_r$ are vectors in $\mathbb{R}^n$.
~~~
