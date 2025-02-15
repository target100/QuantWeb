# Monte Carlo Methods

## Inverse Transform Sampling

Suppose $z$ is uniform random numbers, i.e., $p_Z(z) = 1$, and we want to sample $y$ from $p_Y(y)$. Since
\(
p_Y(y) = p_Z(z)\left|\frac{d z}{d y}\right| = \left|\frac{d z}{d y}\right|
\)
so
\(
z = h(y) \equiv \int_{-\infty}^y p_Y(u) d u
\)
and
\(
y = h^{-1}(z)
\)
This means: we can sample $z$ first, and transform it to $y$ through $y = h^{-1}(z)$.

## Rejection Sampling

## Importance Sampling