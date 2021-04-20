
export function OptimizeWeaponTags(weapon)
{
    let weaponname = weapon.name.replaceAll(' ','').replaceAll('-','').replaceAll('/','').replaceAll('.','').toLowerCase();

    if(!weapon.tags)
    {
        weapon.tags = [];
    }

    weapon.tags.push(weaponname);
    weapon.tags.push(weapon.category.toLowerCase());

    if(weapon.tags.includes('ir'))
    {
        weapon.tags.push("infrared");
    }

    if(weapon.tags.includes('infrared'))
    {
        weapon.tags.push("ir");
    }

    if(weapon.category==="aam")
    {
        weapon.tags.push("airtoair")
        weapon.tags.push("aa")
    }

    if(weapon.category==="agm")
    {
        weapon.tags.push("airtoground")
        weapon.tags.push("ag")
    }
    
    if(weapon.category==="bomb")
    {
        weapon.tags.push("bombs")
        weapon.tags.push("airtoground")
        weapon.tags.push("ag")
    }
    
    if(weapon.category==="pod")
    {
        weapon.tags.push("pods")
        weapon.tags.push("sensors")
    }
    
    if(weapon.category==="rocket")
    {
        weapon.tags.push("rockets")
        weapon.tags.push("airtoground")
        weapon.tags.push("ag")
    }
}

export function FilterByTags(filtertext, object, type)
{
    if(!filtertext)
    {
        return true;
    }

    let filter = filtertext.replaceAll('-','').toLowerCase();
    let filters = filter.split(' ');
    
    let allwordsfound = true;
    for(let word of filters)
    {
        let wordvalid = false;
        for(let tag of object.tags)
        {
            switch(type)
            {
                case 'exact':
                    if(tag === word)
                    {
                        wordvalid = true;
                        break;
                    }
                    break;
                case 'starts':
                    if(tag.startsWith(word))
                    {
                        wordvalid = true;
                        break;
                    }
                    break;
                case 'includes':
                    if(tag.includes(word))
                    {
                        wordvalid = true;
                        break;
                    }
                    break;
                default:
                    if(tag.includes(word))
                    {
                        wordvalid = true;
                        break;
                    }
                    break;
            }
        }

        if(!wordvalid)
        {
            allwordsfound = false;
            break;
        }
    }

    return allwordsfound;
}

export function RegisterPage()
{
    if(window.gtag)
    {
        window.gtag('event', 'page_view', {
            page_location:window.location.origin, 
            page_path: window.location.pathname+window.location.hash, 
            page_title: document.title
        });
    }
}

export const WeaponSearchTerms = ["Air-to-Ground", "Air-to-Air", "Bomb", "Rocket", "Pod", "Fuel", "GPS", "Radar", "Laser", "Infrared", "TV", "Dumb", "Cluster", "Tank", "Light Armor", "Building", "Fortification", "SAM"];

export const AircraftSearchTerms = ["Modern", "Cold War", "Multirole", "Helicopter", "Fighter", "CAS", "Blue", "Red"];

export const hideunfinished = true;