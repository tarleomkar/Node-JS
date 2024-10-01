// async js coding

// line by line code runnig = synchronous
// jo bhi code asyn nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi sara sync code chal jaaye, tab check karo ki async code complete hua ya nahi and agar wo complete hua ho to usey main stack me lao and chala do

async function abcd() {
    // ------- (main stack sync code)
    var blob = await fetch(`https://randomuser.me/api/`)
    var ans = blob.json();

    console.log(ans.results[0].name);
    
    // ------- (main stack sync code)
}

abcd();