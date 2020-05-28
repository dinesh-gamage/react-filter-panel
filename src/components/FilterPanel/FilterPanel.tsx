import * as React from 'react';
import * as ReactDom from 'react-dom';

import './FilterPanel.scss';


interface IProps {
    onOpen?: any,
    onClose?: any
}

interface ICoords {
    top?: number,
    bottom?: number,
    left?: number,
    right?: number

}

function FilterPanel(props: React.PropsWithChildren<IProps>) {

    // states
    let [shopPanel, setShopPanel] = React.useState(false);
    let [coords, setCoords] = React.useState({});


    // get root element
    let rootElement = document.getElementById("filter-portal");
    if (rootElement == null) {
        rootElement = document.createElement("div");
        rootElement.setAttribute('id', "filter-portal");
        document.body.appendChild(rootElement);
    }


    // wrapper
    const el = document.createElement("div");

    React.useEffect(() => {

        rootElement.appendChild(el);
        return () => rootElement.removeChild(el);

    },
        [rootElement, el]
    )

    // update coordinates of filter panel
    const updateTooltipCoords = (button: HTMLButtonElement) => {
        const buttonDetails = button.getBoundingClientRect();
        let rootWidth = rootElement.clientWidth;

        let _coords: ICoords = {
            top: buttonDetails.y + window.scrollY - 15,
            right: rootWidth - buttonDetails.right - 15
        }

        setCoords(_coords);
    };

    // callbacks
    const onOpenPanel = () => {
        setShopPanel(true);

        if (typeof props.onOpen == "function") {
            props.onOpen();
        }
    }

    const onClosePanel = () => {
        setShopPanel(false);

        if (typeof props.onClose == "function") {
            props.onClose();
        }
    }


    // render filter panel
    const renderPanelContent = () => {
        return (<>
            <div className="filter-panel" style={coords}>
                <div className="filter-header">

                    <div className="fh-title">
                        <div className="fht-icon"></div>
                        <div className="fht-text">Filters</div>
                    </div>

                    <div className="burger-menu-btn" onClick={onClosePanel}></div>

                </div>

                <div className="filter-body">

                    {props.children}
                </div>

            </div>
        </>);
    }

    const renderFilterPanel = () => {
        return ReactDom.createPortal(
            renderPanelContent(),
            rootElement
        );
    }

    return (<>
        <div className="filter-panel-btn fpb-burger-menu"
            onClick={(e) => {
                updateTooltipCoords(e.target as HTMLButtonElement);
                onOpenPanel()
            }}
        >
        </div>
        {
            shopPanel ?
                renderFilterPanel()
                :
                null
        }
    </>)
}

export default FilterPanel;