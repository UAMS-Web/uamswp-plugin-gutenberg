//import uamsDropdownModal from "../elements/dropdown-modal/_dropdown-modal";
import UamsnavigationSite from '../modules/deprecated_navigation-site/_navigation-site';
import UamsHeaderGlobal from "../modules/header-global/_header-global";
import UamsAccordion from "../components/accordion/_script";
import UamsAnimate from '../components/animate/_script';
import UamsCollapsable from "../components/experimental_collapsable/script";
import UamsMenu from "../components/menu/_script";
import UamsMenuCollapse from "../components/menu-collapse/_script";
import UamsNavigationSiteVertical from "../modules/navigation-site-vertical/_script";
import UamsMobileMenu from '../modules/mobile-menu/_script';
//import UamsModal from '../components/modal/_script';
import UamsAnimateSubmenuSlideVertical from '../animations/slide/_script';
import UamsNavigationSiteHorizontal from '../components/experimental_navigation-horizontal/_script';
import UamssVideoFrame from '../components/experimental_video-frame/_script';
import UamsButton from '../components/button/_script';
import UamsStickyBox from '../components/sticky-box/_script';
import UamsAnchorMenu from '../components/anchor-menu/_script';
import UamsBackgroundSlider from '../components/background-slider/_script';
import UamsUtilityPanel from '../components/utility-panel/_script';
import UamsNavigationVertical from '../modules/navigation-vertical/_script';
import UamsSlideInPanel from '../components/slide-in-panel/_script';

//import '../components/slider-frame/_script';
import '../modules/hero-slider/_script';

import '../modules/carousel/_script';



const uams = {
    animate: new UamsAnimate(),
    verticalNavitation: new UamsnavigationSite(),
    mobileMenu: new UamsMobileMenu(),
    UamsNavigationVertical: new UamsNavigationVertical(),
    navigationSiteVertical: new UamsNavigationSiteVertical(),
    navigationSiteHorizontal: new UamsNavigationSiteHorizontal(),
    backgroundSlider: new UamsBackgroundSlider(),
    headerGlobal: new UamsHeaderGlobal(),
    accordion: new UamsAccordion(),
    collapsable: new UamsCollapsable(),
    uamsMenuCollapse: new UamsMenuCollapse,
    menu: new UamsMenu(),
    //modal: new UamsModal(),
    button: new UamsButton(),
    animations: {
        //submenuSlideVertical: new UamsAnimateSubmenuSlideVertical(),
    },
    videoFrame: new UamsVideoFrame(),
    stickyBox: new UamsStickyBox(),
    slideInPanel: new UamsSlideInPanel(),
    uamsAnchorMenu: new UamsAnchorMenu(),
    utilityPanel: new UamsUtilityPanel(),
}
