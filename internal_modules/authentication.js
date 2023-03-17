
export const authLogin = async (callBack) => {
    const response = await fetch('http://192.168.1.50/api/mobileapp/quests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            action: 'login',
            username: 'test',
            password: 'test',
        }),
    });


    const json = await response.json();
    //alert(JSON.stringify(json.data))
    callBack(json.data);
};