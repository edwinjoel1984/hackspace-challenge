
function getPeople(){
    return new Promise((resolve, reject) => {
        fetch(
          `https://private-91bf79-ideaware.apiary-mock.com/people`
        ).then((response) => {
          return response.json()
        }).then((json) => {
          resolve(json)
        }).catch((error) => {
          reject(error)
        })
      })
}
function getApps(){
    return new Promise((resolve, reject) => {
        fetch(
          `https://private-91bf79-ideaware.apiary-mock.com/apps`
        ).then((response) => {
          return response.json()
        }).then((json) => {
          resolve(json)
        }).catch((error) => {
          reject(error)
        })
      })
}
export default { people: getPeople, apps: getApps }