function создатьЭкранПросмотра()
{
    var html =
`
`;
    var css =
`
canvas
{
    background-color: black;
    /*
    Canvas must have NO BORDER / PADDING for correct mouse position
    */
    border: 0 none;
    width: 100%;
    height: 100%;
}
`;
    
    var экран = добавитьЭкран("просмотр", html, css);

    var threeJS = МОД.модуль("three.min.js_r110").code64;
    загрузитьСкрипт(муром.atob(threeJS));
}

function отобразитьРезультат()
{
    var iframe = document.getElementById("встройка");
    iframe.src = имяФайла();
}

function отобразитьРезультатВоВесьЭкран()
{
    window.open(имяФайла(), '_blank');
}

function создатьПросмотрДляРедактора()
{
    var область = document.getElementById("среда-область-центральная-верх");
    область.innerHTML =
`
<a id="среда-обновить" class="uk-icon-button" uk-icon="refresh" uk-tooltip="Отобразить сохранённый результат"></a>
<a id="среда-просмотреть" class="uk-icon-button uk-margin-top" uk-icon="expand" uk-tooltip="Отобразить сохранённый результат во весь экран"></a>
`;

    отобразитьРезультат();
    
    var обновить = document.getElementById("среда-обновить");
    обновить.onclick = отобразитьРезультат;
    
    var просмотреть = document.getElementById("среда-просмотреть");
    просмотреть.onclick = отобразитьРезультатВоВесьЭкран;
}

// Установка
// Installation 

if (window.location.search == "?0")
{
    создатьПросмотрДляРедактора();
}
else
{
    создатьЭкранПросмотра();
}