
export const getQuests = async (callBack) => {
    const response = await fetch('https://www.anonimsor.com/api/mobileapp/quests', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({
            action: 'list'
        }),
    });


    const json = await response.json();
    //alert(JSON.stringify(json.data))
    callBack(json.data);
};