export const format = new Intl.NumberFormat('en-us', {
    currency: 'USD',
    style: "currency",
    notation: 'compact',
    maximumSignificantDigits: 3
})

export const formatToken = new Intl.NumberFormat('en-us', {
    notation: 'compact',
    maximumSignificantDigits: 3
})