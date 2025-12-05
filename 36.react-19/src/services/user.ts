export const updateName = async (name: string): Promise<string | undefined> => {

  return new Promise((res) => {
    const delay = Math.random() * 200 + 500
    setTimeout(() => {
      if (Date.now() % 10 <= 2) {
        res('Server Internal Error')
        return
      }

      console.log(`Updated username to: ${name}`);
      res(undefined)
    }, delay);
  })
}