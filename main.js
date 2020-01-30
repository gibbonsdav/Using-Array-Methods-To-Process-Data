// let avgPrice = ''
// items.forEach(function(x) {
//  avgPrice += x.price
// }
// )

// question 1

var avgPrice =
  items.reduce(function(a, b) {
    return a + b.price
  }, 0) / items.length
console.log(avgPrice.toFixed(2))

document.querySelector(
  "#answer1"
).innerHTML = `The average price is $${avgPrice.toFixed(2)}`

// q 2

var cheap = items
  .filter(function(x) {
    return x.price > 14 && x.price < 18
  })
  .map(function(item) {
    return item.title + "\n\n"
  })
  .join("")
document.querySelector("#answer2").innerHTML = cheap

// q3

var brit = items
  .filter(function(x) {
    return x.currency_code === "GBP"
  })
  .map(function(p) {
    return p.title + " " + "costs £" + p.price
  })

document.querySelector("#answer3").innerHTML = brit

// q4

let wooden = items
  .filter(function(x) {
    return x.materials.includes("wood")
  })
  .map(function(z) {
    return z.title + "\n\n"
  })

document.querySelector("#answer4").innerHTML = wooden

// q5

let mix = items
  .filter(function(t) {
    return t.materials.length >= 8
  })
  .map(function(g) {
    return g.title + "\n\n"
  })

document.querySelector("#answer5").innerHTML = mix

// q6

let artisan = items.filter(function(q) {
  return q.who_made === "i_did"
})

document.querySelector(
  "#answer6"
).innerHTML = `${artisan.length} were made by their sellers.`
