/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    await new Promise(res => setTimeout(res, millis)) ;
}


 let t = Date.now()
 sleep(100).then(() => console.log(Date.now() - t)) // 100
 