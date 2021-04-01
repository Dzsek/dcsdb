export function OptimizeWeaponTags(weapon)
{
    let weaponname = weapon.name.replaceAll(' ','').replaceAll('-','').replaceAll('/','').replaceAll('.','').toLowerCase();

    if(!weapon.tags)
    {
        weapon.tags = [];
    }

    weapon.tags.push(weaponname);
    weapon.tags.push(weapon.category.toLowerCase());

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

export function FilterByTags(filtertext, object)
{
    let filter = filtertext.replaceAll('-','').toLowerCase();
    let filters = filter.split(' ');
    
    let allwordsfound = true;
    for(let word of filters)
    {
        let wordvalid = false;
        for(let tag of object.tags)
        {
            if(tag.includes(word))
            {
                wordvalid = true;
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

export const WeaponSearchTerms = ["Air-to-Ground", "Air-to-Air", "Bomb", "Rocket", "Pod", "Fuel", "GPS", "Radar", "Laser"]

export const AircraftSearchTerms = ["Modern", "Cold War", "Multirole", "Blue", "Red"]