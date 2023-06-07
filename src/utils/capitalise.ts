export function captalise(text: string) {
  return text
    .trim()
    .split(' ')
    .map((word) => {
      return word[0].toLocaleUpperCase().concat(word.substring(1))
    })
    .join(' ')
}
