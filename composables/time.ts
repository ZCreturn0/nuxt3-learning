const dateFormat = (fmt: string, date: Date) => {
    let ret;
    const opt: {
        "Y+": string;
        "m+": string;
        "d+": string;
        "H+": string;
        "M+": string;
        "S+": string;
    } = {
        "Y+": date.getFullYear().toString(),
        "m+": (date.getMonth() + 1).toString(),
        "d+": date.getDate().toString(),
        "H+": date.getHours().toString(),
        "M+": date.getMinutes().toString(),
        "S+": date.getSeconds().toString()
    };
    let k: 'Y+' | 'm+' | 'd+' | 'H+' | 'M+' | 'S+';
    for (k in opt) {
        ret = new RegExp("(" + k + ")").exec(fmt);
        if (ret) {
            fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")));
        }
    }
    return fmt;
}

export const now = () => {
    return dateFormat('YYYY-mm-dd HH:MM:SS', new Date());
}
