window.MathJax = {
  loader: {load: ['[tex]/boldsymbol']},
  tex: {
    packages: {'[+]': ['boldsymbol']},
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    tags: 'ams',
    macros: {
      bb: ["{\\textbf #1}", 1],      
      A: "\\boldsymbol{A}",    
      B: "\\boldsymbol{B}",    
      C: "\\boldsymbol{C}",    
      D: "\\boldsymbol{D}",
      E: "\\boldsymbol{E}",    
      F: "\\boldsymbol{F}",    
      G: "\\boldsymbol{G}",    
      H: "\\boldsymbol{H}",
      I: "\\boldsymbol{I}",    
      J: "\\boldsymbol{J}",    
      K: "\\boldsymbol{K}",    
      L: "\\boldsymbol{L}",
      M: "\\boldsymbol{M}",    
      N: "\\boldsymbol{N}",    
      O: "\\boldsymbol{O}",    
      P: "\\boldsymbol{P}",
      Q: "\\boldsymbol{Q}",    
      R: "\\boldsymbol{R}",    
      S: "\\boldsymbol{S}",    
      T: "\\boldsymbol{T}",
      U: "\\boldsymbol{U}",
      V: "\\boldsymbol{V}",
      X: "\\boldsymbol{X}",          
      Y: "\\boldsymbol{Y}",    
      Z: "\\boldsymbol{Z}",
      a: "\\boldsymbol{a}",    
      b: "\\boldsymbol{b}",    
      c: "\\boldsymbol{c}",    
      d: "\\boldsymbol{d}",
      e: "\\boldsymbol{e}",    
      f: "\\boldsymbol{f}",    
      g: "\\boldsymbol{g}",    
      h: "\\boldsymbol{h}",
      i: "\\boldsymbol{i}",    
      j: "\\boldsymbol{j}",    
      k: "\\boldsymbol{k}",    
      l: "\\boldsymbol{l}",
      m: "\\boldsymbol{m}",    
      n: "\\boldsymbol{n}",    
      o: "\\boldsymbol{o}",    
      p: "\\boldsymbol{p}",
      q: "\\boldsymbol{q}",    
      r: "\\boldsymbol{r}",    
      s: "\\boldsymbol{s}",    
      t: "\\boldsymbol{t}",
      u: "\\boldsymbol{u}",
      v: "\\boldsymbol{v}",
      x: "\\boldsymbol{x}",          
      y: "\\boldsymbol{y}",    
      z: "\\boldsymbol{z}",
      FF: "\\boldsymbol{F}",      
      r: "\\boldsymbol{r}",
      w: "\\boldsymbol{w}",            
      y: "\\boldsymbol{y}",
      0: "\\boldsymbol{0}",
      1: "\\boldsymbol{1}",
      bSigma: "\\boldsymbol{\\Sigma}",
      bmu: "\\boldsymbol{\\mu}",
      bsigma: "\\boldsymbol{\\sigma}",
      bbeta: "\\boldsymbol{\\beta}",
      bepsilon: "\\boldsymbol{\\epsilon}",
      EEE: "\\mathbb{E}",
      RRR: "\\mathbb{R}",
      QQQ: "\\mathbb{Q}",
      Var: "\\mbox{Var}",      
      Trace: "\\mbox{Trace}",
      bm: ["\\boldsymbol #1", 1]
    }
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};