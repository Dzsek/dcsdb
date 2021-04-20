
let instance = null;

class DataAccess
{
    constructor(){
        if(!instance)
        {
            instance = this;
        }

        this.aircraft = null;
        this.weapons = null;
        this.aircraftdata = {};
        this.weapondata = {};
        this.tutorials = {};
        this.tutorialLists = {};

        return instance;
    }

    getTutorial(planeid, tutorialid)
    {
        if(this.tutorials[planeid] && this.tutorials[planeid][tutorialid])
        {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(this.tutorials[planeid][tutorialid]);
                  }, 10);
            });
        }
        else
        {
            return fetch(process.env.PUBLIC_URL+"/data/aircrafts/"+planeid+"/tutorials/"+tutorialid+".json")
                    .then(res=>res.json())
                    .then(
                        (res)=>{
                            this.tutorials[planeid] = this.tutorials[planeid] || {};
                            this.tutorials[planeid][tutorialid] = res;
                            return this.tutorials[planeid][tutorialid];
                        });
        }
    }

    getTutorialList(planeid)
    {
        if(this.tutorialLists[planeid])
        {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(this.tutorialLists[planeid]);
                  }, 10);
            });
        }
        else
        {
            return fetch(process.env.PUBLIC_URL+"/data/aircrafts/"+planeid+"/tutorials.json")
                    .then(res=>res.json())
                    .then(
                        (res)=>{
                            this.tutorialLists[planeid] = res;
                            return this.tutorialLists[planeid];
                        });
        }
    }

    getAircraftList(){
        if(this.aircraft)
        {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(this.aircraft);
                  }, 10);
            });
        }
        else
        {
            return fetch(process.env.PUBLIC_URL+"/data/aircrafts/aircrafts.json")
                    .then(res=>res.json())
                    .then(
                        (res)=>{ 
                            this.aircraft = res;
                            return this.aircraft;
                        });
        }
    }

    getWeaponList(){
        if(this.weapons)
        {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(this.weapons);
                  }, 10);
            });
        }
        else
        {
            return fetch(process.env.PUBLIC_URL+"/data/weapons/weapons.json")
                    .then(res=>res.json())
                    .then(
                        (res)=>{ 
                            this.weapons = res;
                            return this.weapons;
                        });
        }
    }

    getAircraft(id){
        if(this.aircraftdata[id])
        {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(this.aircraftdata[id]);
                  }, 10);
            });
        }
        else
        {
            return fetch(process.env.PUBLIC_URL+"/data/aircrafts/"+id+"/data.json")
                    .then(res=>res.json())
                    .then(
                        (res)=>{ 
                            this.aircraftdata[id] = res;
                            return this.aircraftdata[id];
                        });
        }
    }

    getWeapon(id){
        if(this.weapondata[id])
        {
            return new Promise((resolve, reject)=>{
                setTimeout(() => {
                    resolve(this.weapondata[id]);
                  }, 10);
            });
        }
        else
        {
            return fetch(process.env.PUBLIC_URL+"/data/weapons/"+id+"/data.json")
                    .then(res=>res.json())
                    .then(
                        (res)=>{ 
                            this.weapondata[id] = res;
                            return this.weapondata[id];
                        });
        }
    }
}

export default DataAccess;