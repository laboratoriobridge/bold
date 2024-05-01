//Adaptado de https://en.wikipedia.org/wiki/Monotone_cubic_interpolation
export default function (xs: number[], ys: number[]): (x: number) => number {
  let i: number,
    length: number = xs.length

  // Deal with length issues
  if (length !== ys.length) {
    throw Error('Need an equal count of xs and ys.')
  }
  if (length === 0) {
    return function (x: number) {
      return 0
    }
  }
  if (length === 1) {
    // Impl: Precomputing the result prevents problems if ys is mutated later and allows garbage collection of ys
    // Impl: Unary plus properly converts values to numbers
    var result = +ys[0]
    return function (x: number) {
      return result
    }
  }

  // Rearrange xs and ys so that xs is sorted
  var indexes = []
  for (i = 0; i < length; i++) {
    indexes.push(i)
  }
  indexes.sort(function (a, b) {
    return xs[a] < xs[b] ? -1 : 1
  })
  var oldXs = xs,
    oldYs = ys
  // Impl: Creating new arrays also prevents problems if the input arrays are mutated later
  xs = []
  ys = []
  // Impl: Unary plus properly converts values to numbers
  for (i = 0; i < length; i++) {
    xs.push(+oldXs[indexes[i]])
    ys.push(+oldYs[indexes[i]])
  }

  // Get consecutive differences and slopes
  var dys = [],
    dxs = [],
    ms = []
  for (i = 0; i < length - 1; i++) {
    var dx = xs[i + 1] - xs[i],
      dy = ys[i + 1] - ys[i]
    dxs.push(dx)
    dys.push(dy)
    ms.push(dy / dx)
  }

  // Get degree-1 coefficients
  var c1s = [ms[0]]
  for (i = 0; i < dxs.length - 1; i++) {
    var m = ms[i],
      mNext = ms[i + 1]
    if (m * mNext <= 0) {
      c1s.push(0)
    } else {
      var dx_ = dxs[i],
        dxNext = dxs[i + 1],
        common = dx_ + dxNext
      c1s.push((3 * common) / ((common + dxNext) / m + (common + dx_) / mNext))
    }
  }
  c1s.push(ms[ms.length - 1])

  // Get degree-2 and degree-3 coefficients
  var c2s = [],
    c3s = []
  for (i = 0; i < c1s.length - 1; i++) {
    var c1 = c1s[i],
      m_ = ms[i],
      invDx = 1 / dxs[i],
      common_ = c1 + c1s[i + 1] - m_ - m_
    c2s.push((m_ - c1 - common_) * invDx)
    c3s.push(common_ * invDx * invDx)
  }

  // Return interpolant function
  return function (x: number) {
    // The rightmost point in the dataset should give an exact result
    var i = xs.length - 1
    if (x === xs[i]) {
      return ys[i]
    }

    // Search for the interval x is in, returning the corresponding y if x is one of the original xs
    var low = 0,
      mid: number,
      high = c3s.length - 1
    while (low <= high) {
      mid = Math.floor(0.5 * (low + high))
      var xHere = xs[mid]
      if (xHere < x) {
        low = mid + 1
      } else if (xHere > x) {
        high = mid - 1
      } else {
        return ys[mid]
      }
    }
    i = Math.max(0, high)

    // Interpolate
    var diff = x - xs[i],
      diffSq = diff * diff
    return ys[i] + c1s[i] * diff + c2s[i] * diffSq + c3s[i] * diff * diffSq
  }
}
