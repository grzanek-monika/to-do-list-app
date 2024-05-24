export const strContains = (title1, title2) => {
    if(title1.toLowerCase().includes(title2.toLowerCase())){
        return true
    } else return false;
}