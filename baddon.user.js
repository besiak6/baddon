// ==UserScript==
// @name         B/addons NI
// @version      1.2
// @description  Menadżer dodatków by besiak
// @author       besiak
// @match        https://*.margonem.pl/
// @grant        none
// @icon         https://i.imgur.com/OAtRFEw.png
// @downloadURL  https://github.com/besiak6/baddonz/raw/refs/heads/main/baddon.user.js
// @updateURL    https://github.com/besiak6/baddonz/raw/refs/heads/main/baddon.user.js
// ==/UserScript==
(function () {
const isNI = typeof window.Engine === "object";
const interfaceName = isNI ? "ni" : "si";

if (interfaceName !== "ni") {
  return;
}
const accountId = window.Engine.hero.d.account;
const characterId = window.Engine.hero.d.id;

    const addons = {
        AH: {
            name: "Auto Healing",
            icon: "fa-heart",
            url: "https://addons2.margonem.pl/get/153/153639dev.js",
            desc: `<p>Automatyczne leczenie po walce</p>`,
            settings: true
        },
        AX: {
            name: "Auto X",
            icon: "fa-crosshairs",
            url: "https://addons2.margonem.pl/get/153/153642dev.js",
            desc: `<p>Automatyczne atakowanie graczy</p>`,
            settings: true
        },
        AP: {
            name: "Auto Przywo",
            icon: "fa-rocket",
            url: "https://addons2.margonem.pl/get/153/153376dev.js",
            desc: "Automatyczne przywoływanie"
        },
        BM: {
            name: "Better Message",
            icon: "fa-comment-dots",
            url: "https://addons2.margonem.pl/get/152/152607dev.js",
            desc: "Mniej kolizyjne wiadomości"
        },
        ET: {
            name: "Emergency Teleport",
            icon: "fa-running",
            url: "https://addons2.margonem.pl/get/153/153632dev.js",
            desc: `Wytepuje po walce<p><b>Wybierz teleport za pomocą przycisku:</b>.</p><p><b><i><u>Użyj po walce</u></i></b>.</p>`
        },
        ETH: {
            name: "Tropiciele",
            icon: "fa-user-plus",
            url: "https://addons2.margonem.pl/get/153/153547dev.js",
            desc: "Automatyczne wchodzenie do tropicielów herosów gdy obok niego stoisz"
        },
        FG: {
            name: "FreeGift",
            icon: "fa-gift",
            url: "https://addons2.margonem.pl/get/153/153566dev.js",
            desc: "Automatyczne odbieranie darmowych itemów z aktualności"
        },
        GM: {
            name: "Group Manager",
            icon: "fa-users-cog",
            url: "https://addons2.margonem.pl/get/153/153640dev.js",
            desc: `<p style="margin-bottom: 8px;"><span style="font-size: 9px;">Dodawanie/Wyrzucanie/Zmiana zestawów/Rozwiązywanie grupy po walce</p><p><b><u><i>Dodaj po walce</i></u></b><p>Klikając na gracza w oknie "Gracze na mapie",<p><p><b><u><i>Wyrzuć po walce</i></u></b></p><p>Klikajac na gracza w oknie Grupy</p>`,
            settings: true
        },
        IC: {
            name: "Item Connector",
            icon: "fa-link",
            url: "https://addons2.margonem.pl/get/153/153630dev.js",
            desc: `<p>Łączy te same itemy za pomocą przyciska:</p><p><b><i><u>Połącz te same</u></i></b>.</p>`
        },
        LT: {
            name: "Lepsze Tipy",
            icon: "fa-star-half-stroke",
            url: "https://addons2.margonem.pl/get/153/153542dev.js",
            desc: "Lepsze dymki itemów"
        },
        MC: {
            name: "MiniChat",
            icon: "fa-comment",
            url: "https://addons2.margonem.pl/get/153/153541dev.js",
            desc: "Mniejszy chat gry"
        },
        PZW: {
            name: "Zasięg Walki",
            icon: "fa-compass",
            url: "https://addons2.margonem.pl/get/153/153375dev.js",
            desc: "Podświetla zasięg walki członków grupy."
        },
        QM: {
            name: "Quick Merchant",
            icon: "fa-magic",
            url: "https://addons2.margonem.pl/get/153/153496dev.js",
            desc: "Szybsze ulepszanie za pomocą 1, sprzedawanie za pomocą 2"
        },
        RG: {
            name: "Rozwiązywanie grupy",
            icon: "fa-users-slash",
            url: "https://addons2.margonem.pl/get/153/153544dev.js",
            get desc() {
                const key = localStorage.getItem("RG-key") || "N";
                return `Rozwiązywanie grupy pod klawiszem ${key.toUpperCase()}`;
            },
            settings: true
        },
        SAL: {
            name: "Sleeping Commander",
            icon: "fa-cloud-moon",
            url: "https://addons2.margonem.pl/get/153/153628dev.js",
            desc: "Automatycznie oddaje d gdy ktoś napisze"
        },
        UP: {
            name: "Ulepszara",
            icon: "fa-hammer",
            url: "https://addons2.margonem.pl/get/153/153598dev.js",
            desc: `<p>Ulepszaj za pomocą klawisza <b>J</b></p><p><b>Wybierz item za pomocą przycisku:</b>.<p><p><b><i><u>Ulepsz ten przedmiot</u></i></b>.</p><p style="margin-top: 8px;"><span style="color:red; font-size: 8px;"><b><i>Tymczasowy brak konfiguracji</i></b></span></p></div>`
        },
        WAL: {
            name: "Warns Against Level",
            icon: "fa-exclamation-triangle",
            url: "https://addons2.margonem.pl/get/153/153633dev.js",
            desc: `Powiadomienie o bliskości wbicia poziomu`
        },
        ZAP: {
            name: "Szybka Grupa",
            icon: "fa-user-plus",
            url: "https://addons2.margonem.pl/get/152/152959dev.js",
            get desc() {
                const key = localStorage.getItem("ZAP-key") || "B";
                return `Losowe dodawanie do grupy (nie pod id) pod klawiszem ${key.toUpperCase()}`;
            },
            settings: true
        },
        ZT: {
            name: "Znacznik Teleportów",
            icon: "fa-map-marker-alt",
            url: "https://addons2.margonem.pl/get/152/152603dev.js",
            desc: `<p>Podpisy na teleportach</p><p>Możliwość dodawania podpisów/ususwania podpisów/edycji podpisów i wiele wiecej</p>`
        }
    };

    let baddonConfig = JSON.parse(localStorage.getItem("baddon_config") || "{}");
    baddonConfig = {
        addonState: baddonConfig.addonState || {},
        windowPos: baddonConfig.windowPos || { x: 0, y: 0 },
        toggleLag: baddonConfig.toggleLag ?? false,
        isCollapsed: baddonConfig.isCollapsed ?? true,
        windowOpacity: baddonConfig.windowOpacity ?? 0.8,
        mapDarkening: baddonConfig.mapDarkening ?? 0.0,
        showAddonIcons: baddonConfig.showAddonIcons ?? true,
        enableMessages: baddonConfig.enableMessages ?? true, // Zmieniono na enableMessages i domyślnie true
        messageFontSize: baddonConfig.messageFontSize ?? 10,
        messageFontColor: baddonConfig.messageFontColor ?? '#FFFFFF',
        ...baddonConfig
    };
    const saveConfig = () => {
        localStorage.setItem("baddon_config", JSON.stringify(baddonConfig));
    };
    const loadAddonScript = (addonId) => {
        const addon = addons[addonId];
        if (addon && !document.getElementById(`baddon_script_${addonId}`)) {
            const script = document.createElement('script');
            script.id = `baddon_script_${addonId}`;
            script.src = addon.url;
            document.body.appendChild(script);
            baddonConfig.addonState[addonId] = true;
            saveConfig();
        }
    };
    const unloadAddonScript = (addonId) => {
        const script = document.getElementById(`baddon_script_${addonId}`);
        if (script) script.remove();
        baddonConfig.addonState[addonId] = false;
        saveConfig();
    };

    const setAddonStatus = (addonId, enabled) => {
        if (enabled) loadAddonScript(addonId);
        else unloadAddonScript(addonId);
    };

    const applyGlobalStyles = () => {
        const rootStyle = document.documentElement.style;
        rootStyle.setProperty('--baddon-base-opacity', baddonConfig.windowOpacity);
    };

    let originalDrawMap = window.Engine.map.draw;

    const applyMapDarkening = () => {
        if (window.Engine && window.Engine.map) {
            if (baddonConfig.mapDarkening === 0 && window.Engine.map.draw !== originalDrawMap) {
                window.Engine.map.draw = originalDrawMap;
            } else if (baddonConfig.mapDarkening > 0 && window.Engine.map.draw !== applyMapDarkeningWrapper) {
                if (!originalDrawMap || originalDrawMap === window.Engine.map.draw) {
                    originalDrawMap = window.Engine.map.draw;
                }
                window.Engine.map.draw = applyMapDarkeningWrapper;
            }
        }
    };
    const applyMapDarkeningWrapper = function(ctx) {
        const call = originalDrawMap.call(this, ctx);
        if (baddonConfig.mapDarkening > 0) {
            const size = window.Engine.getCanvasViewSize();
            ctx.globalAlpha = baddonConfig.mapDarkening;
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, size.width, size.height);
            ctx.globalAlpha = 1.0;
        }
        return call;
    };

    let messageStyleElement;
    const updateMessageStyles = () => {
        if (!messageStyleElement) {
            messageStyleElement = document.createElement('style');
            messageStyleElement.id = "baddon-message-styles";
            document.head.appendChild(messageStyleElement);
        }

        let css = `
        .big-messages .message,
        .big-messages .message *,
        .big-messages .message::before,
        .big-messages .message::after {
            background: none !important;
            background-color: transparent !important;
            box-shadow: none !important;
            backdrop-filter: none !important;
            border: none !important;
        }

        .big-messages .message {
            font-size: ${baddonConfig.messageFontSize}px !important;
            pointer-events: none !important;
            color: ${baddonConfig.messageFontColor} !important;
            -webkit-text-stroke: 0.3px rgba(0, 0, 0, 0.3);
            ${baddonConfig.enableMessages ? '' : 'display: none !important;'}
        }`;
        messageStyleElement.textContent = css;
    };
    const initGUI = () => {
        const fontAwesome = document.createElement('link');
        fontAwesome.rel = 'stylesheet';
        fontAwesome.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css";
        document.head.appendChild(fontAwesome);

        const style = document.createElement('style');
        style.textContent = `
        :root {
            --baddon-base-opacity: ${baddonConfig.windowOpacity};
            --baddon-text-color: #F5F5DC;
            --baddon-strong-border-color: rgba(100, 100, 100, 0.9);
            --baddon-light-border-color: rgba(80, 80, 80, 0.9);

            --baddon-primary-border: 2px solid var(--baddon-strong-border-color);
            --baddon-secondary-border: 1px solid var(--baddon-light-border-color);
            --baddon-background-color: rgba(30, 30, 30, var(--baddon-base-opacity));
            --baddon-header-background-color: rgba(44, 44, 44, calc(var(--baddon-base-opacity) + 0.1));
            --baddon-element-background-color: rgba(42, 42, 42, var(--baddon-base-opacity));
            --baddon-button-background-color: rgba(50, 50, 50, calc(var(--baddon-base-opacity) + 0.1));
            --baddon-hover-background-color: rgba(55, 55, 55, calc(var(--baddon-base-opacity) + 0.05));
            --baddon-button-hover-background-color: rgba(70, 70, 70, calc(var(--baddon-base-opacity) + 0.15));
            --baddon-input-background-color: rgba(20, 20, 20, calc(var(--baddon-base-opacity) - 0.3));
        }

        .baddon_gui_main {
            position: fixed;
            top: ${baddonConfig.windowPos.y}px;
            left: ${baddonConfig.windowPos.x}px;
            width: ${baddonConfig.isCollapsed ? '74px' : '300px'};
            max-height: 420px;
            background: var(--baddon-background-color);
            color: var(--baddon-text-color);
            border: var(--baddon-primary-border);
            border-radius: 6px;
            z-index: 99;
            display: flex;
            flex-direction: column;
            font-family: 'Arial', sans-serif;
            overflow: hidden;
            cursor: url("../img/gui/cursor/1n.png") 4 0, auto;
        }
        .baddon_header_bar {
            background: var(--baddon-header-background-color);
            padding: 4px 10px;
            font-size: 13px;
            text-align: left;
            border-top-left-radius: 4px;
            border-top-right-radius: 4px;
            user-select: none;
            letter-spacing: 1px;
            position: relative;
            cursor: url("../img/gui/cursor/1n.png") 4 0, auto;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }
        .baddon_header_bar.centered {
            text-align: center;
        }
        .baddon_header_bar .baddon_title_txt,
        .baddon_header_bar .baddon_set_gear,
        .baddon_header_bar .baddon_dc_icon {
            pointer-events: none;
        }
        .baddon_header_bar .baddon_toggle_btn,
        .baddon_header_bar .baddon_set_gear,
        .baddon_header_bar .baddon_dc_icon {
            pointer-events: auto;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
        }
        .baddon_toggle_btn {
            position: absolute;
            right: 6px;
            top: 6px;
            width: 16px;
            height: 14px;
            background: url("../img/gui/buttony.png") -556px -399px;
        }
        .baddon_toggle_btn:hover {
            filter: brightness(1.2);
        }
        .baddon_list_area {
            overflow-y: auto;
            flex: 1;
            padding: 0 10px 4px;
            margin-top: 0;
            display: ${baddonConfig.isCollapsed ? 'none' : 'block'};
            scrollbar-width: thin;
            scrollbar-color: var(--baddon-light-border-color) rgba(26, 26, 26, calc(var(--baddon-base-opacity) * 0.5));
            -webkit-overflow-scrolling: touch;
        }
        .baddon_list_area::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
        }
        .baddon_list_area::-webkit-scrollbar-track {
            background: transparent;
        }
        .baddon_list_area::-webkit-scrollbar-thumb {
            background-color: var(--baddon-light-border-color);
            border-radius: 4px;
            border: 1px solid var(--baddon-strong-border-color);
        }
        .baddon_list_area::-webkit-scrollbar-thumb:hover {
            background-color: rgba(100, 100, 100, calc(var(--baddon-base-opacity) + 0.1));
        }

        .baddon_addon_unit {
            background: var(--baddon-element-background-color);
            border: var(--baddon-secondary-border);
            border-radius: 4px;
            margin-bottom: 4px;
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            transition: background 0.2s ease;
            cursor: url("../img/gui/cursor/1n.png") 4 0, auto;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }
        .baddon_addon_unit:hover {
            background: var(--baddon-hover-background-color);
        }
        .baddon_addon_unit .baddon_name_row {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .baddon_addon_unit .baddon_content_left {
            display: flex;
            align-items: center;
            gap: ${baddonConfig.showAddonIcons ? '8px' : '0'};
            position: relative;
        }
        .baddon_addon_unit .baddon_content_left i {
            display: ${baddonConfig.showAddonIcons ? 'inline-block' : 'none'};
        }
        .baddon_addon_unit .baddon_addon_txt {
            font-size: 12px;
            font-weight: bold;
            font-family: Arial, sans-serif;
            text-shadow: 1px 1px 1px #000;
            margin: 0;
            padding: 0;
            color: var(--baddon-text-color);
            line-height: 24px;
            text-align: left;
            background: none;
            user-select: none;
            margin-left: 0;
        }
        .baddon_addon_unit .baddon_addon_info {
            font-size: 10px;
            font-family: Arial, sans-serif;
            text-shadow: 1px 1px 1px #000;
            margin: 0;
            padding: 0;
            color: var(--baddon-text-color);
            line-height: 14px;
            text-align: left;
            background: none;
            user-select: none;
            margin-top: 4px;
        }
        .baddon_check_box_wrap {
            position: relative;
            display: inline-block;
            width: 15px;
            height: 15px;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
        }
        .baddon_check_box_wrap input[type="checkbox"] {
            opacity: 0;
            width: 15px;
            height: 15px;
            margin: 0;
            position: absolute;
            z-index: 2;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
        }
        .baddon_check_box_wrap label {
            position: absolute;
            left: 0;
            top: 0;
            width: 15px;
            height: 15px;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
        }
        .baddon_check_box_wrap input[type="checkbox"] + label::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 15px;
            height: 15px;
            border: var(--baddon-secondary-border);
            background: rgba(84, 84, 84, var(--baddon-base-opacity));
            box-shadow: 0 2px 5px 0px rgba(0, 0, 0, 0.5) inset;
        }
        .baddon_check_box_wrap input[type="checkbox"]:checked + label::after {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            top: 0;
            left: 0;
            background: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%230dff00' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='m6 10 3 3 6-6'/%3e%3c/svg%3e");
            background-size: contain;
            background-repeat: no-repeat;
        }
        .baddon_title_txt {
            font-family: Arial, sans-serif;
            text-shadow: 1px 1px 1px #000;
            margin: 0;
            padding: 0;
            color: var(--baddon-text-color);
            line-height: 28px;
            text-align: left;
            font-size: 9px;
            background: none;
            user-select: none;
            margin-left: 4px;
        }
        .baddon_set_button {
            width: 13px;
            height: 13px;
            background: url("../img/gui/buttony.png") no-repeat -607px -117px;
            margin-right: 4px;
            position: absolute;
            left: 212px;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
        }
        .baddon_set_button:hover {
            background-position: -659px -117px;
        }
        .baddon_set_gear {
            position: absolute;
            left: 2px;
            top: 7px;
            font-size: 13px;
            color: #aaa;
            display: ${baddonConfig.isCollapsed ? 'none' : 'block'};
        }
        .baddon_set_gear:hover {
            color: #fff;
        }
        .baddon_dc_icon {
            position: absolute;
            left: 28px;
            top: 8px;
            font-size: 13px;
            color: #aaa;
            display: ${baddonConfig.isCollapsed ? 'none' : 'block'};
        }
        .baddon_dc_icon:hover {
            color: #fff;
        }
        .baddon_search_zone {
            display: flex;
            align-items: center;
            background: var(--baddon-header-background-color);
            border: var(--baddon-secondary-border);
            border-radius: 4px;
            margin: 4px 10px;
            padding: 4px 8px;
            display: ${baddonConfig.isCollapsed ? 'none' : 'flex'};
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }
        .baddon_search_zone i {
            margin-right: 8px;
            color: #aaa;
        }
        .baddon_search_zone input {
            flex-grow: 1;
            background: none;
            border: none;
            color: var(--baddon-text-color);
            font-family: Arial, sans-serif;
            font-size: 12px;
            outline: none;
            cursor: url("../img/gui/cursor/1n.png") 4 0, auto;
        }
        .baddon_search_zone .baddon_clear_search {
            color: #aaa;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
            margin-left: 8px;
            display: none;
        }
        .baddon_search_zone .baddon_clear_search:hover {
            color: #fff;
        }
        .baddon_settings_area {
            display: none;
            flex-direction: column;
            gap: 10px;
            flex: 1;
            overflow-y: auto;
            color: var(--baddon-text-color);
            font-size: 12px;
            scrollbar-width: thin;
            scrollbar-color: var(--baddon-light-border-color) rgba(26, 26, 26, calc(var(--baddon-base-opacity) * 0.5));
            -webkit-overflow-scrolling: touch;
            margin-top: 0;
            padding: 0 10px 10px;
        }
        .baddon_settings_area::-webkit-scrollbar {
            width: 8px;
            background-color: transparent;
        }
        .baddon_settings_area::-webkit-scrollbar-track {
            background: transparent;
        }
        .baddon_settings_area::-webkit-scrollbar-thumb {
            background-color: var(--baddon-light-border-color);
            border-radius: 4px;
            border: 1px solid var(--baddon-strong-border-color);
        }
        .baddon_settings_area::-webkit-scrollbar-thumb:hover {
            background-color: rgba(100, 100, 100, calc(var(--baddon-base-opacity) + 0.1));
        }

        .baddon_settings_area h3 {
            margin-top: 0;
            color: var(--baddon-text-color);
            font-size: 14px;
            text-align: center;
        }
        .baddon_setting_sec {
            background: var(--baddon-element-background-color);
            border: var(--baddon-secondary-border);
            border-radius: 4px;
            padding: 8px 10px;
            display: flex;
            flex-direction: column;
            gap: 8px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }
        .baddon_setting_sec h4 {
            margin: 0;
            color: var(--baddon-text-color);
            font-size: 13px;
            text-align: center;
            border-bottom: var(--baddon-secondary-border);
            padding-bottom: 5px;
            margin-bottom: 5px;
        }
        .baddon_setting_sec button {
            background: var(--baddon-button-background-color);
            border: var(--baddon-secondary-border);
            color: var(--baddon-text-color);
            padding: 6px 12px;
            border-radius: 4px;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
            font-size: 12px;
            transition: background 0.2s ease;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
        }
        .baddon_setting_sec button:hover {
            background: var(--baddon-button-hover-background-color);
        }
        .baddon_setting_sec textarea {
            width: calc(100% - 16px);
            height: 80px;
            background: var(--baddon-input-background-color);
            border: var(--baddon-secondary-border);
            color: var(--baddon-text-color);
            padding: 8px;
            font-family: monospace;
            font-size: 11px;
            resize: none;
            border-radius: 4px;
            cursor: url("../img/gui/cursor/1n.png") 4 0, auto;
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
        }
        .baddon_set_btns_row {
            display: flex;
            gap: 8px;
            justify-content: center;
        }
        .baddon_opt_row {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
        }
        .baddon_opt_row label {
            flex-grow: 1;
            cursor: inherit;
            order: 2;
        }
        .baddon_opt_row .baddon_check_box_wrap {
            order: 1;
            cursor: inherit;
        }

        #baddon_opacity_slider, #baddon_map_darkening_slider, #baddon_message_font_size_slider {
            -webkit-appearance: none;
            width: 100%;
            height: 8px;
            background: rgba(84, 84, 84, var(--baddon-base-opacity));
            outline: none;
            border-radius: 4px;
            margin: 0;
            padding: 0;
            border: 1px solid var(--baddon-light-border-color);
            box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
        }

        #baddon_opacity_slider::-webkit-slider-thumb, #baddon_map_darkening_slider::-webkit-slider-thumb, #baddon_message_font_size_slider::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #555;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
            border: 1px solid #777;
            box-shadow: 0 0 2px rgba(0,0,0,0.5);
        }

        #baddon_opacity_slider::-moz-range-thumb, #baddon_map_darkening_slider::-moz-range-thumb, #baddon_message_font_size_slider::-moz-range-thumb {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            background: #555;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
            border: 1px solid #777;
            box-shadow: 0 0 2px rgba(0,0,0,0.5);
        }
        .baddon_color_picker_row {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: url("../img/gui/cursor/1n.png") 4 0, auto;
        }
        .baddon_color_picker_row label {
            flex-grow: 1;
        }
        .baddon_color_picker_row input[type="color"] {
            -webkit-appearance: none;
            border: none;
            width: 30px;
            height: 20px;
            padding: 0;
            background: transparent;
            cursor: url("../img/gui/cursor/5n.png") 4 0, pointer;
        }
        .baddon_color_picker_row input[type="color"]::-webkit-color-swatch-wrapper {
            padding: 0;
        }
        .baddon_color_picker_row input[type="color"]::-webkit-color-swatch {
            border: var(--baddon-secondary-border);
            border-radius: 4px;
        }
        .baddon_color_picker_row input[type="color"]::-moz-color-swatch-wrapper {
            padding: 0;
        }
        .baddon_color_picker_row input[type="color"]::-moz-color-swatch {
            border: var(--baddon-secondary-border);
            border-radius: 4px;
        }

        .baddon_tip_window {
            position: absolute;
            z-index: 1001;
            box-shadow: 0 0 0 0 #2b282a, 0 0 0 1px #353131, 0 0 0 2px #191311, 0 0 0 3px #2b2727, 0 0 0 4px #59595a, 0 0 0 5px #9da1a7, 0 0 0 6px #5a585b, 0 0 0 7px #2c2625;
            min-width: 150px;
            max-width: 250px;
            color: #e6d6bf;
            line-height: 14px;
            text-align: center;
            -webkit-user-select: none;
            -moz-user-select: none;
            user-select: none;
            opacity: 0;
            transition: opacity 0.2s ease;
            pointer-events: none;
        }
        .baddon_tip_window.visible {
            opacity: 1;
        }
        .baddon_tip_window .baddon_tip_content {
            background: rgba(15, 15, 15, 0.85);
            padding: 5px;
            font-family: 'Rubik', sans-serif !important;
            font-size: 12.8px;
            word-break: break-word;
        }
        `;
        document.head.appendChild(style);
        applyGlobalStyles();
        applyMapDarkening();
        updateMessageStyles(); // Apply initial message styles

        const mainWindow = document.createElement('div');
        mainWindow.className = 'baddon_gui_main';

        const lagPing = document.querySelector('.lag.lag');
        if (lagPing) {
            const oldLagClick = lagPing._baddonLagClick;
            if (oldLagClick) {
                lagPing.removeEventListener('click', oldLagClick);
            }

            const newLagClick = () => {
                if (baddonConfig.toggleLag) {
                    mainWindow.style.display = (mainWindow.style.display === 'none' ? 'flex' : 'none');
                    localStorage.setItem('baddon-visible', mainWindow.style.display === 'flex');
                }
            };
            lagPing.addEventListener('click', newLagClick);
            lagPing._baddonLagClick = newLagClick;
        }

        const savedWindowVisibility = localStorage.getItem('baddon-visible');
        if (savedWindowVisibility === 'false') {
            mainWindow.style.display = 'none';
        } else {
            mainWindow.style.display = 'flex';
        }

        const headerBar = document.createElement('div');
        headerBar.className = 'baddon_header_bar';
        headerBar.textContent = 'B/addons';
        headerBar.classList.add('baddon_title_txt');
        if (!baddonConfig.isCollapsed) {
             headerBar.classList.add("centered");
        }

        const settingsGear = document.createElement('i');
        settingsGear.className = 'fa-solid fa-gears baddon_set_gear';
        headerBar.insertBefore(settingsGear, headerBar.firstChild);
        const discordIcon = document.createElement('i');
        discordIcon.className = 'fa-brands fa-discord baddon_dc_icon';
        headerBar.insertBefore(discordIcon, settingsGear.nextSibling);
        if (baddonConfig.isCollapsed) {
            settingsGear.style.display = 'none';
            discordIcon.style.display = 'none';
        }

        discordIcon.addEventListener('click', (e) => {
            e.stopPropagation();
            window.open('https://discord.gg/rJeNVHr49f', '_blank');
        });
        const toggleBtn = document.createElement('div');
        toggleBtn.className = 'baddon_toggle_btn';
        headerBar.appendChild(toggleBtn);

        const searchZone = document.createElement('div');
        searchZone.className = 'baddon_search_zone';
        const searchIcon = document.createElement('i');
        searchIcon.className = 'fa-solid fa-magnifying-glass';
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.placeholder = 'Szukaj dodatku...';
        const clearSearch = document.createElement('i');
        clearSearch.className = 'fa-solid fa-xmark baddon_clear_search';
        clearSearch.title = 'Wyczyść wyszukiwanie';

        searchZone.appendChild(searchIcon);
        searchZone.appendChild(searchInput);
        searchZone.appendChild(clearSearch);

        const addonListArea = document.createElement('div');
        addonListArea.className = 'baddon_list_area';
        addonListArea.style.display = baddonConfig.isCollapsed ? "none" : "block";

        let isSettingsVisible = false;

        const settingsArea = document.createElement('div');
        settingsArea.className = 'baddon_settings_area';
        settingsArea.innerHTML = `
            <div class="baddon_setting_sec">
                <h4>Ogólne</h4>
                <div class="baddon_opt_row">
                    <div class="baddon_check_box_wrap">
                        <input type="checkbox" id="baddon_ping_toggle">
                        <label for="baddon_ping_toggle"></label>
                    </div>
                    <label for="baddon_ping_toggle">Pokazuj/Schowaj okno za pomocą pinga</label>
                </div>
            </div>
            <div class="baddon_setting_sec">
                <h4>Wygląd Okna</h4>
                <div class="baddon_opt_row">
                    <label for="baddon_opacity_slider">Przezroczystość Okna</label>
                    <input type="range" id="baddon_opacity_slider" min="0.05" max="1" step="0.01">
                </div>
                <div class="baddon_opt_row">
                    <div class="baddon_check_box_wrap">
                        <input type="checkbox" id="baddon_show_icons">
                        <label for="baddon_show_icons"></label>
                    </div>
                    <label for="baddon_show_icons">Ikonki obok nazw dodatków</label>
                </div>
            </div>
            <div class="baddon_setting_sec">
                <h4>Wygląd Mapy</h4>
                <div class="baddon_opt_row">
                    <label for="baddon_map_darkening_slider">Przyciemnienie Mapy</label>
                    <input type="range" id="baddon_map_darkening_slider" min="0.0" max="1.0" step="0.01">
                </div>
            </div>
            <div class="baddon_setting_sec">
                <h4>Powiadomienia Message</h4>
                <div class="baddon_opt_row">
                    <div class="baddon_check_box_wrap">
                        <input type="checkbox" id="baddon_enable_messages">
                        <label for="baddon_enable_messages"></label>
                    </div>
                    <label for="baddon_enable_messages">Powiadomienia Message</label>
                </div>
                <div id="message_settings_details" style="display: ${baddonConfig.enableMessages ? 'flex' : 'none'}; flex-direction: column; gap: 8px;">
                    <div class="baddon_opt_row">
                        <label for="baddon_message_font_size_slider">Rozmiar czcionki</label>
                        <input type="range" id="baddon_message_font_size_slider" min="6" max="16" step="1">
                    </div>
                    <div class="baddon_color_picker_row">
                        <label for="baddon_message_font_color">Kolor czcionki</label>
                        <input type="color" id="baddon_message_font_color">
                    </div>
                </div>
            </div>
            <div class="baddon_setting_sec">
                <h4>Reset</h4>
                <button id="baddon_reset_addons">Resetuj dodatki</button>
                <button id="baddon_reset_win_pos">Resetuj pozycję okna</button>
            </div>
            <div class="baddon_setting_sec">
                <h4>Import / Eksport</h4>
                <textarea id="baddon_io_text" placeholder="Wklej/Skopiuj dane"></textarea>
                <div class="baddon_set_btns_row">
                    <button id="baddon_import_data">Importuj</button>
                    <button id="baddon_export_data">Eksportuj</button>
                </div>
            </div>
        `;
        const resetAddonsBtn = settingsArea.querySelector('#baddon_reset_addons');
        const resetWinPosBtn = settingsArea.querySelector('#baddon_reset_win_pos');
        const ioTextarea = settingsArea.querySelector('#baddon_io_text');
        const importDataBtn = settingsArea.querySelector('#baddon_import_data');
        const exportDataBtn = settingsArea.querySelector('#baddon_export_data');
        const pingToggleCheckbox = settingsArea.querySelector('#baddon_ping_toggle');
        const opacitySlider = settingsArea.querySelector('#baddon_opacity_slider');
        const showIconsCheckbox = settingsArea.querySelector('#baddon_show_icons');
        const mapDarkeningSlider = settingsArea.querySelector('#baddon_map_darkening_slider');
        const enableMessagesCheckbox = settingsArea.querySelector('#baddon_enable_messages'); // Zmieniona nazwa
        const messageFontSizeSlider = settingsArea.querySelector('#baddon_message_font_size_slider');
        const messageFontColorInput = settingsArea.querySelector('#baddon_message_font_color');
        const messageSettingsDetails = settingsArea.querySelector('#message_settings_details'); // Nowy element do sterowania widocznością

        pingToggleCheckbox.checked = baddonConfig.toggleLag;
        opacitySlider.value = baddonConfig.windowOpacity;
        showIconsCheckbox.checked = baddonConfig.showAddonIcons;
        mapDarkeningSlider.value = baddonConfig.mapDarkening;
        enableMessagesCheckbox.checked = baddonConfig.enableMessages; // Zmieniono na enableMessages
        messageFontSizeSlider.value = baddonConfig.messageFontSize;
        messageFontColorInput.value = baddonConfig.messageFontColor;

        // Funkcja do aktualizacji widoczności ustawień wiadomości
        const updateMessageSettingsVisibility = () => {
            messageSettingsDetails.style.display = enableMessagesCheckbox.checked ? 'flex' : 'none';
        };

        // Wywołanie przy inicjalizacji
        updateMessageSettingsVisibility();


        pingToggleCheckbox.addEventListener('change', () => {
            baddonConfig.toggleLag = pingToggleCheckbox.checked;
            saveConfig();
        });
        opacitySlider.addEventListener('input', (e) => {
            baddonConfig.windowOpacity = parseFloat(e.target.value);
            saveConfig();
            document.documentElement.style.setProperty('--baddon-base-opacity', baddonConfig.windowOpacity);
            document.documentElement.style.setProperty('--baddon-background-color', `rgba(30, 30, 30, ${baddonConfig.windowOpacity})`);
            document.documentElement.style.setProperty('--baddon-header-background-color', `rgba(44, 44, 44, ${baddonConfig.windowOpacity + 0.1 > 1 ? 1 : baddonConfig.windowOpacity + 0.1})`);
            document.documentElement.style.setProperty('--baddon-element-background-color', `rgba(42, 42, 42, ${baddonConfig.windowOpacity})`);
            document.documentElement.style.setProperty('--baddon-button-background-color', `rgba(50, 50, 50, ${baddonConfig.windowOpacity + 0.1 > 1 ? 1 : baddonConfig.windowOpacity + 0.1})`);
            document.documentElement.style.setProperty('--baddon-hover-background-color', `rgba(55, 55, 55, ${baddonConfig.windowOpacity + 0.05 > 1 ? 1 : baddonConfig.windowOpacity + 0.05})`);
            document.documentElement.style.setProperty('--baddon-button-hover-background-color', `rgba(70, 70, 70, ${baddonConfig.windowOpacity + 0.15 > 1 ? 1 : baddonConfig.windowOpacity + 0.15})`);
            document.documentElement.style.setProperty('--baddon-input-background-color', `rgba(20, 20, 20, ${baddonConfig.windowOpacity - 0.3 < 0 ? 0 : baddonConfig.windowOpacity - 0.3})`);
            applyGlobalStyles();
        });
        showIconsCheckbox.addEventListener('change', () => {
            baddonConfig.showAddonIcons = showIconsCheckbox.checked;
            saveConfig();
            document.querySelectorAll('.baddon_addon_unit').forEach(unit => {
                const icon = unit.querySelector('.baddon_content_left i');
                const contentLeft = unit.querySelector('.baddon_content_left');

                if (icon) {
                    icon.style.display = baddonConfig.showAddonIcons ? 'inline-block' : 'none';
                }
                if (contentLeft) {
                    contentLeft.style.gap = baddonConfig.showAddonIcons ? '8px' : '0';
                }
            });
        });
        mapDarkeningSlider.addEventListener('input', (e) => {
            baddonConfig.mapDarkening = parseFloat(e.target.value);
            saveConfig();
            applyMapDarkening();
        });
        enableMessagesCheckbox.addEventListener('change', () => { // Zmieniona nazwa
            baddonConfig.enableMessages = enableMessagesCheckbox.checked; // Zmieniono na enableMessages
            saveConfig();
            updateMessageStyles();
            updateMessageSettingsVisibility(); // Aktualizacja widoczności ustawień
        });
        messageFontSizeSlider.addEventListener('input', (e) => {
            baddonConfig.messageFontSize = parseInt(e.target.value);
            saveConfig();
            updateMessageStyles();
        });
        messageFontColorInput.addEventListener('input', (e) => {
            baddonConfig.messageFontColor = e.target.value;
            saveConfig();
            updateMessageStyles();
        });
        resetAddonsBtn.addEventListener('click', () => {
            if (confirm('Czy na pewno chcesz zresetować wszystkie dodatki? Spowoduje to ich wyłączenie.')) {
                for (const addonId in addons) {
                    unloadAddonId(addonId);
                }
                baddonConfig.addonState = {};
                saveConfig();
                location.reload();
            }
        });
        resetWinPosBtn.addEventListener('click', () => {
            baddonConfig.windowPos = { x: 0, y: 0 };
            saveConfig();
            mainWindow.style.left = '0px';
            mainWindow.style.top = '0px';

            const windowsToReset = [
                '.wnd-autox', '#ax-wnd', '.wnd-heal', '.wnd-gm', '.rg-gui-window', '.sg-gui-window'
            ];
            windowsToReset.forEach(selector => {
                const el = document.querySelector(selector);
                if (el) {
                    el.style.left = '0px';
                    el.style.top = '0px';
                }
            });
        });
        exportDataBtn.addEventListener('click', () => {
            ioTextarea.value = JSON.stringify(baddonConfig);
        });
        importDataBtn.addEventListener('click', () => {
            try {
                const importedConfig = JSON.parse(ioTextarea.value);
                if (typeof importedConfig === 'object' && importedConfig !== null) {
                    baddonConfig = { ...baddonConfig, ...importedConfig };
                    saveConfig();
                    alert('Konfiguracja zaimportowana pomyślnie! Strona zostanie odświeżona.');
                    location.reload();
                } else {
                    alert('Błąd: Wklejony tekst nie jest prawidłowym obiektem JSON dla konfiguracji.');
                }
            } catch (e) {
                alert('Błąd podczas importowania danych. Upewnij się, że format JSON jest prawidłowy.');
            }
        });
        const filterAddons = (query) => {
            const lowerCaseQuery = query.toLowerCase();
            for (const addonId in addons) {
                const addon = addons[addonId];
                const card = document.getElementById(`baddon_addon_unit_${addonId}`);
                if (card) {
                    const nameMatch = addon.name.toLowerCase().includes(lowerCaseQuery);
                    const descMatch = addon.desc.toLowerCase().includes(lowerCaseQuery);
                    card.style.display = (nameMatch || descMatch) ? 'flex' : 'none';
                }
            }
            clearSearch.style.display = query ? 'block' : 'none';
        };

        searchInput.addEventListener('input', (e) => filterAddons(e.target.value));
        clearSearch.addEventListener('click', () => {
            searchInput.value = '';
            filterAddons('');
        });
        const updateContentDisplay = () => {
            searchZone.style.display = isSettingsVisible ? 'none' : 'flex';
            addonListArea.style.display = isSettingsVisible ? 'none' : 'block';
            settingsArea.style.display = isSettingsVisible ? 'flex' : 'none';
            settingsGear.classList.toggle('fa-gears', !isSettingsVisible);
            settingsGear.classList.toggle('fa-puzzle-piece', isSettingsVisible);
            updateTooltips();
        };

        settingsGear.addEventListener('click', () => {
            isSettingsVisible = !isSettingsVisible;
            updateContentDisplay();
        });
        toggleBtn.addEventListener('click', () => {
            baddonConfig.isCollapsed = !baddonConfig.isCollapsed;
            saveConfig();

            if (baddonConfig.isCollapsed) {
                mainWindow.style.width = "72px";
                addonListArea.style.display = "none";
                searchZone.style.display = "none";
                settingsArea.style.display = "none";
                headerBar.classList.remove("centered");
                discordIcon.style.display = "none";
                settingsGear.style.display = "none";
                isSettingsVisible = false;
            } else {
                mainWindow.style.width = "300px";
                headerBar.classList.add("centered");
                discordIcon.style.display = "block";
                settingsGear.style.display = "block";
                updateContentDisplay();
            }
            updateTooltips();
        });
        for (const addonId in addons) {
            const { name, icon, desc } = addons[addonId];
            const addonUnit = document.createElement('div');
            addonUnit.className = 'baddon_addon_unit';
            addonUnit.id = `baddon_addon_unit_${addonId}`;

            const nameRow = document.createElement('div');
            nameRow.className = 'baddon_name_row';
            const contentLeft = document.createElement('div');
            contentLeft.className = 'baddon_content_left';
            contentLeft.style.gap = baddonConfig.showAddonIcons ? '8px' : '0';

            const iconElement = document.createElement('i');
            iconElement.className = `fas ${icon}`;
            iconElement.style.display = baddonConfig.showAddonIcons ? 'inline-block' : 'none';

            const textElement = document.createElement('span');
            textElement.className = 'baddon_addon_txt';
            textElement.textContent = name;
            textElement.style.marginLeft = '0';

            contentLeft.appendChild(iconElement);
            contentLeft.appendChild(textElement);

            if (addons[addonId].settings && baddonConfig.addonState[addonId]) {
                const setButton = document.createElement('div');
                setButton.className = `baddon_set_button ${addonId}`;
                contentLeft.appendChild(setButton);
            }

            nameRow.appendChild(contentLeft);
            const checkBoxWrap = document.createElement('div');
            checkBoxWrap.className = 'baddon_check_box_wrap';

            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = !!baddonConfig.addonState[addonId];
            checkbox.id = `baddon_checkbox_${addonId}`;
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    setAddonStatus(addonId, true);
                } else {
                    setAddonStatus(addonId, false);
                    if (typeof message === 'function') {
                        message("Odśwież grę aby wyłączyć dodatek!");
                    } else {
                        console.warn("Funkcja 'message' nie jest zdefiniowana w grze.");
                    }
                }

                const currentContentLeft = document.querySelector(`#baddon_addon_unit_${addonId} .baddon_content_left`);
                if (checkbox.checked && addons[addonId].settings) {
                    if (!currentContentLeft.querySelector(`.baddon_set_button.${addonId}`)) {
                        const setButton = document.createElement('div');
                        setButton.className = `baddon_set_button ${addonId}`;
                        currentContentLeft.appendChild(setButton);
                    }
                } else {
                    const setButton = currentContentLeft.querySelector(`.baddon_set_button.${addonId}`);
                    if (setButton) setButton.remove();
                }
            });

            const label = document.createElement('label');
            label.setAttribute('for', checkbox.id);

            checkBoxWrap.appendChild(checkbox);
            checkBoxWrap.appendChild(label);
            nameRow.appendChild(checkBoxWrap);

            const infoElement = document.createElement('div');
            infoElement.className = 'baddon_addon_info';
            infoElement.innerHTML = desc;

            addonUnit.appendChild(nameRow);
            addonUnit.appendChild(infoElement);
            addonListArea.appendChild(addonUnit);
            if (checkbox.checked) setAddonStatus(addonId, true);
        }

        mainWindow.appendChild(headerBar);
        mainWindow.appendChild(searchZone);
        mainWindow.appendChild(addonListArea);
        mainWindow.appendChild(settingsArea);
        document.body.appendChild(mainWindow);
        let isDragging = false;
        let dragOffsetX = 0;
        let dragOffsetY = 0;
        headerBar.addEventListener('mousedown', (e) => {
            if (e.target.closest('.baddon_toggle_btn') || e.target.closest('.baddon_set_gear') || e.target.closest('.baddon_dc_icon')) {
                return;
            }
            isDragging = true;
            dragOffsetX = e.clientX - mainWindow.offsetLeft;
            dragOffsetY = e.clientY - mainWindow.offsetTop;
            e.preventDefault();
        });
        document.addEventListener('mouseup', () => {
            isDragging = false;
        });
        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                let newX = e.clientX - dragOffsetX;
                let newY = e.clientY - dragOffsetY;

                newX = Math.max(0, Math.min(newX, window.innerWidth - mainWindow.offsetWidth));
                newY = Math.max(0, Math.min(newY, window.innerHeight - mainWindow.offsetHeight));

                mainWindow.style.left = `${newX}px`;
                mainWindow.style.top = `${newY}px`;
                baddonConfig.windowPos = { x: newX, y: newY };
                saveConfig();
            }
        });
        mainWindow.addEventListener('wheel', (e) => {
            if (addonListArea.style.display !== 'none') {
                addonListArea.scrollTop += e.deltaY;
            } else if (settingsArea.style.display !== 'none') {
                settingsArea.scrollTop += e.deltaY;
            }
            e.preventDefault();
        }, { passive: false });

        const tooltipWindow = document.createElement("div");
        tooltipWindow.classList.add("baddon_tip_window");
        document.body.appendChild(tooltipWindow);

        const tipContent = document.createElement("div");
        tipContent.classList.add("baddon_tip_content");
        tooltipWindow.appendChild(tipContent);

        const showTooltip = (event, content) => {
            tipContent.innerHTML = content;
            tooltipWindow.classList.add("visible");

            const offset = 25;
            let x = event.pageX + offset;
            let y = event.pageY;

            const width = tooltipWindow.offsetWidth;
            const screenWidth = window.innerWidth;
            if (x + width > screenWidth) {
                x = event.pageX - width - offset;
            }

            tooltipWindow.style.left = `${x}px`;
            tooltipWindow.style.top = `${y}px`;
        };
        const hideTooltip = () => {
            tooltipWindow.classList.remove("visible");
        };
        const tooltipMap = new Map();

        const updateTooltipMap = () => {
            tooltipMap.clear();
            tooltipMap.set(".baddon_toggle_btn", () => `<p style="margin: 0;">${baddonConfig.isCollapsed ? 'Rozwiń' : 'Zwiń'}</p>`);
            tooltipMap.set(".baddon_set_button", () => `<p style="margin: 0;">Ustawienia</p>`);
            tooltipMap.set(".heal-close-button", () => `<p style="margin: 0;">Zamknij</p>`);
            tooltipMap.set(".gm-close-button", () => `<p style="margin: 0;">Zamknij</p>`);
            tooltipMap.set(".autox-close-button", () => `<p style="margin: 0;">Zamknij</p>`);
            tooltipMap.set(".baddon_dc_icon", () => `<p style="margin: 0;">Dołącz do Discorda!</p>`);
            tooltipMap.set(".baddon_set_gear", () => `<p style="margin: 0;">${isSettingsVisible ? 'Lista dodatków' : 'Ustawienia'}</p>`);
            tooltipMap.set("#baddon_reset_win_pos", () => `<p style="margin: 0;">Resetuje pozycje okien wszystkich dodatków do góry-lewej.</p>`);
            tooltipMap.set("#baddon_ping_toggle", () => `<p style="margin: 0;">Pokazuj/Schowaj okno klikając na ping pod paskiem doświadczenia</p>`);
            tooltipMap.set("#baddon_opacity_slider", () => `<p style="margin: 0;">Zmieniaj przezroczystość okna</p>`);
            tooltipMap.set("#baddon_map_darkening_slider", () => `<p style="margin: 0;">Przyciemniaj mapę gry</p>`);
            tooltipMap.set("#baddon_show_icons", () => `<p style="margin: 0;">Włącz/Wyłącz wyświetlanie ikonek obok nazw dodatków.</p>`);
            tooltipMap.set("#baddon_enable_messages", () => `<p style="margin: 0;">Włącz/Wyłącz wyświetlanie powiadomień systemowych (np. "Otrzymano przedmiot").</p>`);
            tooltipMap.set("#baddon_message_font_size_slider", () => `<p style="margin: 0;">Dostosuj rozmiar czcionki powiadomień message.</p>`);
            tooltipMap.set("#baddon_message_font_color", () => `<p style="margin: 0;">Wybierz kolor tekstu powiadomień message.</p>`);
        };
        const attachTooltips = () => {
            document.querySelectorAll('.baddon_set_gear, .baddon_dc_icon, .baddon_toggle_btn, .baddon_set_button, .heal-close-button, .gm-close-button, .autox-close-button, #baddon_reset_win_pos, .baddon_opt_row, .baddon_color_picker_row').forEach(el => {
                if (el._showTooltipHandler) {
                    el.removeEventListener("mouseenter", el._showTooltipHandler);
                    el.removeEventListener("mousemove", el._showTooltipHandler);
                    el.removeEventListener("mouseleave", hideTooltip);
                    delete el._showTooltipHandler;
                }
            });
            tooltipMap.forEach((generateContent, selector) => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(el => {
                    el._showTooltipHandler = (e) => showTooltip(e, generateContent());
                    el.addEventListener("mouseenter", el._showTooltipHandler);
                    el.addEventListener("mousemove", el._showTooltipHandler);
                    el.addEventListener("mouseleave", hideTooltip);
                });
            });
        };

        const updateTooltips = () => {
            updateTooltipMap();
            attachTooltips();
        };

        updateTooltips();
    };

    initGUI();
})();
