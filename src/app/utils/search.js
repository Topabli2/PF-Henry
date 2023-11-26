import { data } from "@/app/api/data";

const search = (letters) => {
    const dataCopy = [...data];

    const finds = dataCopy.filter(game => game.title.includes(letters));
    return finds;

}

export default search;