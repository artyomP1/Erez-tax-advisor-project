export default {
    getServiceById,
    // deleteContact,
    // saveContact,
    // getEmptyContact,
    query
};



function query() {
    return Promise.resolve(OurServices);
}


function getServiceById(id) {
    return new Promise((resolve, reject) => {
        const ourService = OurServices.find(ourService => ourService._id === id);
        console.log(ourService);
        ourService ? resolve(ourService) : reject(`service id ${id} not found!`);
    });
}

// function deleteContact(id) {
//     return new Promise((resolve, reject) => {
//         const index = contacts.findIndex(contact => contact._id === id);
//         if (index !== -1) {
//             contacts.splice(index, 1);
//         }
//         resolve(contacts);
//     });
// }

// function _updateContact(contact) {
//     return new Promise((resolve, reject) => {
//         const index = contacts.findIndex(c => contact._id === c._id);
//         if (index !== -1) {
//             contacts[index] = contact;
//         }
//         resolve(contact);
//     });
// }

// function _addContact(contact) {
//     return new Promise((resolve, reject) => {
//         contact._id = _makeId();
//         contacts.unshift(contact);
//         resolve(contact);
//     });
// }

// function saveContact(contact) {
//     return contact._id ? _updateContact(contact) : _addContact(contact);
// }

// function getEmptyContact() {
//     return {
//         name: '',
//         email: '',
//         phone: ''
//     };
// }



function _makeId(length = 10) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

const OurServices = [{
    _id: "5a56640269f443a5d64b32ca",
    name: "החזרי מס לשכירים",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578159227/b44vtbz3lvep7kvuwtou.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578836738/qtey3wh59bj2akcspces.jpg",
    text: {
        mainTxt: [],
        bodyTxt: [{
            header: '',
            body: [],
            moreTxt: ""

        }],

    }
},
{
    _id: "5a5664025f6ae9aa24a99fde",
    name: "הצהרות הון",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1577873365/dln0vf5es7qhy5ifv8uk.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578834455/y9jyr3pdgqazfekwrptt.jpg",
    text: {
        mainTxt: ['כל מי שפותח עסק נדרש להגיש למס הכנסה הצהרת הון ראשונה עם פתיחת העסק, ולאחר מכן הצהרת הון נוספת בכל שלוש עד ארבע שנים', 'הצהרת הון היא כלי שבאמצעותו מס הכנסה בוחן האם רמת החיים והנכסים של המצהיר סבירים ביחס להכנסות השנתיות עליהן הצהיר באמצעות השוואה של ההבדלים בין שתי הצהרות ההון (הנוכחית והקודמת) לבין ההכנסות וההוצאות שדווחו באותן שנים', 'בהצהרת ההון יש להגיש תמונת מצב מפורטת לגבי כל הנכסים בתאריך שנקבע. נכסים אלה כוללים בין היתר: נדל”ן, תיקי השקעות, קרנות השתלמות, חשבונות בנק, ציוד, רכבים וכו’', 'כאשר משרדנו מגיש עבורך את הצהרת ההון, אנחנו מבצעים את כל הבדיקות הנדרשות כדי לוודא שאתה לא תהיה מופתע ע"י רשויות המס'],
        bodyTxt: [{
            header: '',
            body: [],
            moreTxt: ""

        }],

    }
},
{
    _id: "5a56640252d6acddd183d319",
    name: "הנהלת חשבונות",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578159336/c8itpj7wi1xltqh2skxk.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578831263/xdx4nbd2cg5x1oqk9sno.jpg",
    text: {
        mainTxt: ['הנהלת החשבונות היא אבן היסוד של כל עסק, באמצעותה מתבצע תיעוד ורישום של כל ההכנסות וההוצאות של העסק, לעקוב אחר מצבו הכספי של העסק בכל רגע נתון, ולהפיק דו"ח רווח והפסד בעת הצורך ', 'תיעוד כלל המסמכים של העסק (הוצאות והכנסות) באופן שוטף מאפשר לבעל העסק לבצע תכנון תקציבי ארוך טווח, ניתוח נתונים והסקת מסקנות, וכן יכול לשמש את בעל העסק במקרה של צורך בהוכחה כתובה. בנוסף, כל עסק מחוייב לנהל הנהלת חשובנות בהתאם להוראות ניהול ספרים במס הכנסה, בהתאם לאופי וגודל העסק'],
        bodyTxt: [{
            header: `שירותי הנהלת החשבונות שמסופקים ע"י משרדנו כוללים בין היתר:`,
            body: ['הנהלת החשבונות הנדרשת בהתאם להוראות ניהול ספרים (חד צידית או כפולה)', 'תיעוד מסודר של כלל החומרים שהעוברו ע"י הלקוח למערכת הנהלת החשבונות', 'דיווחים לרשויות המס', 'דיווח מפורט ומקוון למע"מ', 'החזרי בלו על הסולר לזכאים', 'עדכון הלקוח בתשלומים / בהחזרים בכל תקופת דיווח'],
            moreTxt: "משרדנו מספק את השירותים לעיל באמצעות מערכת הנהלת חשבונות ממוחשבת וייחודית, שכוסכת לך זמן יקר וכאב ראש"


        },
        {
            header: `היתרונות בשימוש במערכת שלנו:`,
            body: ['הוצאת חשבוניות דיגיטליות ושליחה ללקוח במייל מהסלולארי או מהמחשב', 'סליקת כרטיסי אשראי', 'מעקב שוטף באמצעות המערכת אחר גביה מלקוחות', 'העברת חשבוניות באמצעות האפליקציה ללא צורך במסירה פיזית', 'דו"ח רווח והפסד שמתעדכן און-ליין המאפשר לך לראות את המצב של העסק שלה בזמן אמת בכל מקום', 'תשלומים לרשויות- אפשרות לראות בכל רגע את גובה התשלומים הנדרשים למס הכנסה ומע"מ – כך לעולם לא תהיה מופתע באמצע החודש'],
        }
        ],

    }
},
{
    _id: "5a1110252d6acddd183d319",
    name: "תכנון מס",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578158617/xjgy0zrh7kqxbfdnqxqs.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578836513/b7g0pqzwqaszkjei4m1j.jpg",
    text: {
        mainTxt: [],
        bodyTxt: [{
            header: '',
            body: [],
            moreTxt: ""

        }],

    }

},
{
    _id: "5a566402ed1cf3412345674d",
    name: "חשבות שכר",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578159686/jhdvdjguhmqnv1spydo6.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578832420/zt9bz3j8b9qp39ugtucw.jpg",
    text: {
        mainTxt: ['משרדנו מספק שירותי חשבות שכר מקצועיים תוך הקפדה על דיני עבודה וצווי הרחבה לפי הענף בו פועל העסק, מקליטת העובד ועד עזיבתו'],
        bodyTxt: [{
            header: `השירותים שאנו מספקים בתחום חשבות השכר כוללים בין היתר:`,
            body:
                ['הפקת כרטיסי עובד (טופס 101) לכלל העובדים עם קליטתם לעבודה, ותיעודם כשהם חתומים על ידי כל עובד', '	הכנת והפקת תלושי שכר חודשיים לכל עובד בהתאם לנתונים שהתקבלו באופן שוטף', 'חישוב תשלומי גמר חשבון לעובד (פיצויי פיטורין, דמי הבראה, פדיון ימי חופשה) עם סיום העסקתו, הפקת טופס 161 בגין פיצויי פיטורין וגריעת העובד ממערכות השכר', 'מעקב אחר צבירת ימי חופשה וימי מחלה בהתאם לדרישות החוק ולוותק העובד', 'פתיחת קופות פנסיה, גמל וקרן השתלמות בחברת הביטוח', '	סיוע בהכנת דוחות לביטוח לאומי בעת תביעות עובדים (כגון: תאונת עבודה, דמי לידה, מילואים)', '	מתן מענה לסוגיות מורכבות בתחום דיני העבודה', 'הפקת טפסי 106 לעובדים לאחר סיום שנת המס', 'דיווח ושידור טופס 126 בסיום כל שנה'],
            moreTxt: ""

        }],

    }
},
{
    _id: "5a566402ed1cf349f0b47b4d",
    name: "דוחות שנתיים",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578159573/acpujepzg4dsoetva2pm.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578834050/fsnfrxnkqgmvtriwbbva.jpg",

    text: {
        mainTxt: ['דו"ח שנתי הוא מסמך המשקף את פעילותו הפיננסית של העוסק בשנת המס, על ידי פירוט כלל הניכויים והזיכויים שלו באותה השנה. הדו"ח כולל פירוט של כלל ההכנסות וההוצאות של הנישום בשנת המס, לרבות רווחים מנכסים, הפקדות לקרנות, מיסים ששולמו וטפסים נוספים על פי הצורך'],
        bodyTxt: [{
            header: `  מי חייב להגיש דו"ח שנתי למס הכנסה?`,
            body:
                ['בעל עסק עצמאי, שהוא עוסק מורשה או עוסק פטור במע"מ', 'אדם, שלבדו או יחד עם קרובו מחזיק מעל 10% ממניות חברה', '	אדם שיש לו הכנסה משכירות שמתקבלת מנכס שאינו דירה למגורים כגון: חנות, משרד, מחסן ועוד', 'עובד שכיר, אשר הכנסותיו ממשכורת הינן מעל  651,000 ש"ח  ברוטו בשנה (נכון לשנת 2018)', '	אדם, שבשנת מס פרש מעבודתו וקיבל מענק פרישה וביצע פריסה על החלק החייב במס, חייב בהגשת דוח על כל הכנסותיו בכל אחת משנות הפריסה'],
            moreTxt: 'משרדנו מומחה בהגשת דוחות שנתיים לעצמאים, לרבות דיווחים על הכנסות בארץ ובחו"ל, רווחי הון מניירות ערך בארץ ובחו"ל, מס שבח וכדומה'


        }],
    }

},
{
    _id: "5a566402ed1cf349f0b4123",
    name: "גיוס הון",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578124570/s6r9xg11gwrnsqxkiyes.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578836866/tvx4ppwcwkodub5lonyd.jpg",
    text: {
        mainTxt: [],
        bodyTxt: [{
            header: '',
            body: [],
            moreTxt: ""

        }],

    }
},
{
    _id: "5a266402edbbb349f1b4123",
    name: "ליווי וייעוץ בפתיחת עסק מול רשויות המס",
    imgUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578837177/dsvjycciorgkeiohq8hj.jpg",
    imgPageUrl: "https://res.cloudinary.com/artyompogosov/image/upload/v1578837075/fu9ydzwlub0xfz9quogo.jpg",
    text: {
        mainTxt: ['רוצה לפתוח עסק? אתה לא צריך לרוץ בעצמך לרשויות המס, אנחנו פותחים לך את התיקים חינם באופן מסודר ומהיר', 'סגירת תיקים גם מתבצעת עלינו'],
        bodyTxt: [{
            header: '',
            body: [],
            moreTxt: ""

        }],

    }
}

];