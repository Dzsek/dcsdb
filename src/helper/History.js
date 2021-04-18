
let _historyinstance = null;

class History
{
    constructor(){
        if(!_historyinstance)
        {
            _historyinstance = this;
        }

        return _historyinstance;
    }

    pushHistory(url, obj)
    {
        sessionStorage.history = sessionStorage.history || JSON.stringify([]);

        let hs = JSON.parse(sessionStorage.history);
        hs.push({url: url, obj: obj});
        sessionStorage.history = JSON.stringify(hs);
    }

    getLast()
    {
        let hs = JSON.parse(sessionStorage.history || "[]");
        if(hs && hs.length)
        {
            return hs[hs.length-1];
        }
    }

    popHistory()
    {
        let hs = JSON.parse(sessionStorage.history);
        if(hs && hs.length)
        {
            const ret = hs.pop();
            sessionStorage.history = JSON.stringify(hs);
            return ret;
        }
    }
}

export default History;