

export const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
}

export const trimToFixedString=(s,size=12) => {
    if(typeof s !== 'string') return ''
    if(s.length>size)
        return s.split('').slice(0,size).join('')+"..."
    return s
}

export const compareUsers=(user1,user2) => {
    const fullName1=user1.name.first+user1.name.last;
    const fullName2=user2.name.first+user2.name.last;
    console.log(`Comparing ${fullName1} ${fullName2}`);
    return fullName1.toLowerCase()>fullName2.toLowerCase();
}