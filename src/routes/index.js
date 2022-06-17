import React from "react";
import { Redirect } from "react-router-dom";

import Pageslogin from '../pages/Authentication/Login';
import Logout from '../pages/Authentication/Logout';
import Pagesregister from '../pages/Authentication/Register';
import ForgetPassword from '../pages/Authentication/ForgetPassword';
import LockScreen from "../pages/Authentication/pages-lock-screen";

//Dashboard
import Dashboard from '../pages/Dashboard/dashboard';

//Calender
import Calendar from "../pages/Calendar/calendar";

//Email
import EmailInbox from '../pages/Email/email-inbox';
import EmailRead from "../pages/Email/email-read";
import EmailCompose from "../pages/Email/email-compose";

//UI Elements
import UiAlerts from "../pages/UI Elements/ui-alerts";
import UiButtons from "../pages/UI Elements/ui-buttons";
import UiBadge from "../pages/UI Elements/ui-badge";
import UiCards from "../pages/UI Elements/ui-cards";
import UiCarousel from "../pages/UI Elements/ui-carousel";
import UiDropdown from "../pages/UI Elements/ui-dropdowns";
import UiGrid from "../pages/UI Elements/ui-grid";
import UiImages from "../pages/UI Elements/ui-images";
import UiLightbox from "../pages/UI Elements/ui-lightbox";
import UiModal from "../pages/UI Elements/ui-modals";
import UiPagination from "../pages/UI Elements/ui-pagination";
import UiPopoverTooltips from "../pages/UI Elements/ui-popover-tooltips";
import UiProgressbar from "../pages/UI Elements/ui-progressbars";
import UiSweetAlert from "../pages/UI Elements/ui-sweet-alert";
import UiTabsAccordions from "../pages/UI Elements/ui-tabs-accordions";
import UiTypography from "../pages/UI Elements/ui-typography";
import UiVideo from "../pages/UI Elements/ui-video";
import UiSessionTimeout from "../pages/UI Elements/ui-session-timeout";
import UiRangeSlider from "../pages/UI Elements/ui-rangeslider";

//Forms
import FormElements from "../pages/Forms/form-elements";
import FormValidations from "../pages/Forms/form-validation";
import FormAdvanced from "../pages/Forms/form-advanced";
import FormEditors from "../pages/Forms/form-editors";
import FormUpload from "../pages/Forms/form-uploads";
import FormXeditable from "../pages/Forms/form-xeditable";

//Charts
import ChartsAppex from "../pages/Charts/charts-appex";
import ChartsChartist from "../pages/Charts/charts-chartist";
import ChartsJs from "../pages/Charts/charts-chartjs";
import ChartsKnob from "../pages/Charts/charts-other";
import ChartsC3 from "../pages/Charts/charts-c3";
import ChartsSparkLine from "../pages/Charts/charts-sparkline";

//Tables
import BasicTables from "../pages/Tables/tables-basic";
import DatatableTables from "../pages/Tables/tables-datatable";
import ResponsiveTables from "../pages/Tables/tables-responsive";
import EditableTables from "../pages/Tables/tables-editable";

//Icons
import IconDripicons from "../pages/Icons/icons-dripicons";
import IconIon from "../pages/Icons/icons-ion";
import IconMaterial from "../pages/Icons/icons-material";
import IconFontawesome from "../pages/Icons/icons-fontawesome";
import IconThemify from "../pages/Icons/icons-themify";
import IconTypicons from "../pages/Icons/icons-typicons";

// Maps
import MapsGoogle from "../pages/Maps/maps-google";
import MapsVector from "../pages/Maps/maps-vector";

//Extra Pages
import PagesTimeline from "../pages/Extra Pages/pages-timeline";
import PagesInvoice from "../pages/Extra Pages/pages-invoice";
import PagesDirectory from "../pages/Extra Pages/pages-directory";
import PagesBlank from "../pages/Extra Pages/pages-blank";
import Pages404 from "../pages/Extra Pages/pages-404";
import Pages500 from "../pages/Extra Pages/pages-500";

//My Pages
import Rolesmanagement from "../pages/Roles Management/rolesmanagement";

import StripeIntegration from "../pages/Intergration Management/stripeintegration";
import ShofiyIntegration from "../pages/Intergration Management/shopifyintegration";
import WooCommerceIntegration from "../pages/Intergration Management/woocommerceintegration";
import VexproIntegration from "../pages/Intergration Management/vexprointegration";
import OneDashSaleIntegration from "../pages/Intergration Management/onedashsalesintegration";
import BigCommerceIntegration from "../pages/Intergration Management/bigcommerceintegration";
import AmazonIntegration from "../pages/Intergration Management/amazonintegration";
import IntegrationReport from "../pages/Intergration Management/integrationreport"

import Subscription from "../pages/Subscription Management/subscription";
import UserSubscription from "../pages/Subscription Management/usersubscription"
import Usermanagement from "../pages/User Management/usermanagement";
import TableEditablePage from "../pages/User Management/table"
import Subscriptionreport from "../pages/Subscription Management/report"
import Dailysubscriber from "../pages/Subscription Management/dailysubscriber"
import Individualreport from "../pages/Subscription Management/individualreport";
import Userprofile from "../pages/User Management/userprofile";
import Integration from "../pages/User Management/integration"
import Project from "../pages/User Management/project"
import UserProject from "../pages/User Management/userproject"


import Faq from "../pages/faq/faq"

import Tax from "../pages/tax management/taxmanagement"

import ProjectManagement from "../pages/project management/main"
import EmailProjectMan from "../pages/project management/email"
import CampaignProjectMan from "../pages/project management/campaign"
import InteractiveProjectMan from "../pages/project management/interactive"
import ProductReport from "../pages/project management/productreport"
import Plans from "../pages/Subscription Management/plans"
import Media from "../pages/media management/index"

import Marketing from "../pages/marketing/index"
import SmsMarketing from '../pages/marketing/sms'
import EmailMarketing from "../pages/marketing/email"
import WhatsappMarketing from "../pages/marketing/whatsapp"
import WebsiteMarketing from "../pages/marketing/browser"
import AppMarketing from "../pages/marketing/in-app"
import ExistingCampaign from "../pages/marketing/main"

import CustomerService from "../pages/customer support/index"
import CustomerServiceReport from "../pages/customer support/report"
import ComplainDetails from "../pages/customer support/details"
import MySupport from "../pages/customer support/mysupport"

import IpManagement from "../pages/ip management/index"

import NoAccess from "../pages/noexcess"

import Dummy from "../pages/dummy"


const authProtectedRoutes = [

  //My Pages
  {path: "/dummy", component: Dummy},
  { path: "/rolesmanagement", component: Rolesmanagement},

  { path: "/stripeintegration", component: StripeIntegration},
  {path: "/shofiyintegration", component: ShofiyIntegration},
  {path: "/woocommerceintegration", component: WooCommerceIntegration},
  {path: "/vexprointegration", component: VexproIntegration},
  {path: "/onedashsaleintegration", component: OneDashSaleIntegration},
  {path: "/bigcommerceintegration", component: BigCommerceIntegration},
  {path: "/amazonintegration", component: AmazonIntegration},
  {path: "/integrationreport", component: IntegrationReport},
  

  { path: "/subscription", component: Subscription},
  {path: "/usersubscription", component: UserSubscription},
  { path: "/user", component: Usermanagement},
  { path: "/subscriptionreport", component: Subscriptionreport},
  { path: "/ireport", component: Individualreport},
  { path: "/userprofile", component: Userprofile},
  {path: "/integration", component: Integration},
  {path: "/project", component: Project},
  {path: "/userproject", component: UserProject},

  { path: "/faq", component: Faq},
  {path: "/noaccess", component: NoAccess},

  { path: "/taxmanagement", component: Tax},

  { path: "/interactive", component: InteractiveProjectMan},
  { path: "/email", component: EmailProjectMan},
  { path: "/campaign", component: CampaignProjectMan},

  { path: "/productreport", component: ProductReport},
  { path: "/project", component: ProjectManagement},
  { path: "/plans", component: Plans},
  { path: "/media", component: Media},

  { path: "/marketing", component: Marketing},
  { path: "/smsmarketing", component: SmsMarketing},
  { path: "/appmarketing", component: AppMarketing},
  { path: "/websitemarketing", component: WebsiteMarketing},
  { path: "/emailmarketing", component: EmailMarketing},
  { path: "/whatsappmarketing", component: WhatsappMarketing},
  { path: "/existingcampaign", component: ExistingCampaign},

  { path: "/customerservice", component: CustomerService},
  { path: "/customerservicereport", component: CustomerServiceReport},
  { path: "/customercomplain", component: ComplainDetails},
  {path: "/mysupport", component: MySupport},

  {path: "/ipmanagemnet", component: IpManagement},

  // DashBoard
  { path: "/dashboard", component: Dashboard },

  //Calendar
  { path: "/calendar", component: Calendar },

  //Email
  { path: "/email-inbox", component: EmailInbox },
  { path: "/email-read", component: EmailRead },
  { path: "/email-compose", component: EmailCompose },

  //UI Elements
  { path: "/ui-alerts", component: UiAlerts },
  { path: "/ui-buttons", component: UiButtons },
  { path: "/ui-badge", component: UiBadge },
  { path: "/ui-cards", component: UiCards },
  { path: "/ui-carousel", component: UiCarousel },
  { path: "/ui-dropdowns", component: UiDropdown },
  { path: "/ui-grid", component: UiGrid },
  { path: "/ui-images", component: UiImages },
  { path: "/ui-lightbox", component: UiLightbox },
  { path: "/ui-modals", component: UiModal },
  { path: "/ui-pagination", component: UiPagination },
  { path: "/ui-popover-tooltips", component: UiPopoverTooltips },
  { path: "/ui-progressbars", component: UiProgressbar },
  { path: "/ui-sweet-alert", component: UiSweetAlert },
  { path: "/ui-tabs-accordions", component: UiTabsAccordions },
  { path: "/ui-typography", component: UiTypography },
  { path: "/ui-video", component: UiVideo },
  { path: "/ui-session-timeout", component: UiSessionTimeout },
  { path: "/ui-rangeslider", component: UiRangeSlider },

  //Forms
  { path: "/form-elements", component: FormElements },
  { path: "/form-validation", component: FormValidations },
  { path: "/form-advanced", component: FormAdvanced },
  { path: "/form-editors", component: FormEditors },
  { path: "/form-uploads", component: FormUpload },
  { path: "/form-xeditable", component: FormXeditable },

  //Charts
  { path: "/charts-appex", component: ChartsAppex },
  { path: "/charts-chartist", component: ChartsChartist },
  { path: "/charts-chartjs", component: ChartsJs },
  { path: "/charts-other", component: ChartsKnob },
  { path: "/charts-c3", component: ChartsC3 },
  { path: "/charts-sparkline", component: ChartsSparkLine },

  // Tables
  { path: "/tables-basic", component: BasicTables },
  { path: "/tables-datatable", component: DatatableTables },
  { path: "/tables-responsive", component: ResponsiveTables },
  { path: "/tables-editable", component: EditableTables },

  // Icons
  { path: "/icons-dripicons", component: IconDripicons },
  { path: "/icons-ion", component: IconIon },
  { path: "/icons-material", component: IconMaterial },
  { path: "/icons-fontawesome", component: IconFontawesome },
  { path: "/icons-themify", component: IconThemify },
  { path: "/icons-typicons", component: IconTypicons },

  // Maps
  { path: "/maps-google", component: MapsGoogle },
  { path: "/maps-vector", component: MapsVector },

  //Extra Pages
  { path: "/pages-timeline", component: PagesTimeline },
  { path: "/pages-invoice", component: PagesInvoice },
  { path: "/pages-directory", component: PagesDirectory },
  { path: "/pages-blank", component: PagesBlank },

  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Pageslogin },
  { path: "/register", component: Pagesregister },
  { path: '/forget-password', component: ForgetPassword },
  { path: '/pages-lock-screen', component: LockScreen },
  { path: "/pages-404", component: Pages404 },
  { path: "/pages-500", component: Pages500 },
];

export { authProtectedRoutes, publicRoutes };
