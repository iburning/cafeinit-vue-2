/**
 * @fileoverview main for amazeui
 * @author: burning <www.cafeinit.com>
 * @version: 2016-11-15
 */

/* Alert & Modal & Toast */
import CIAlertTip from './alertTip/AMAlertTip'

import CIActions from './modal/AMActions'
import CIAlert from './modal/AMAlert'
import CIConfirm from './modal/AMConfirm'
import CIModal from './modal/AMModal'

import CIToast from './toast/CIToast'


/* Buttons & Form */
import CIButton from './button/AMButton'
import CILinkButton from './button/AMLinkButton'

import CIForm from './form/AMForm'
import CICheckbox from './form/AMCheckbox'
import CINumber from './form/AMNumber'
import CIRadio from './form/AMRadio'
import CISelect from './form/AMSelect'
import CISwitch from './form/AMSwitch'
import CIText from './form/AMInput'

import CIListCheckbox from './list/AMListCheckbox'
import CIListRadio from './list/AMListRadio'
import CIListSwitch from './list/AMListSwitch'

import CIImagePicker from './imagePicker/CIImagePicker'
import CISlider from './slider/CISlider'


/* Layout */
import CIBlock from './block/CIBlock'
import CIBlockBody from './block/CIBlockBody'
import CIBlockFooter from './block/CIBlockFooter'
import CIBlockHeader from './block/CIBlockHeader'

import CICollection from './collection/CICollection'
import CICollectionCell from './collection/CICollectionCell'

import CIGrid from './grid/AMGrid'
import CIGridCell from './grid/AMGridCell'

import CIList from './list/CIList'
import CIListCell from './list/CIListCell'
import CIListHeader from './list/CIListHeader'

import CIOffcanvas from './offcanvas/CIOffcanvas.vue'
import CIScrollView from './scrollView/CIScrollView'

import CISlideView from './slideView/CISlideView'
import CISlideViewItem from './slideView/CISlideViewItem'


/* Navigation */
import CIBreadcrumb from './breadcrumb/AMBreadcrumb'
import CIPagination from './pagination/AMPagination.vue'
import CINavigation from './navigation/CINavigation.vue'
import CITabBar from './tabView/CITabBar'
import CITreeNav from './treeNav/CITreeNav'


/* Others */
import CIBadge from './badge/AMBadge'
import CIImage from './image/CIImage'
import CILoading from './loading/CILoading'
import CIRate from './rate/CIRate'
import CISticky from './sticky/CISticky'
import CIToTop from './toTop/CIToTop'


/* Helper */
import CICompnentHelper from './utils/CICompnentHelper'
import CIScrollHelper from './utils/CIScrollHelper'


const CIComponents = {
  'ci-alert-tip': CIAlertTip,

  'ci-badge': CIBadge,
  'ci-block': CIBlock,
  'ci-block-body': CIBlockBody,
  'ci-block-footer': CIBlockFooter,
  'ci-block-header': CIBlockHeader,

  'ci-breadcrumb': CIBreadcrumb,
  'ci-collection': CICollection,
  'ci-collection-cell': CICollectionCell,

  'ci-grid': CIGrid,
  'ci-grid-cell': CIGridCell,

  'ci-image': CIImage,

  'ci-list': CIList,
  'ci-list-cell': CIListCell,
  'ci-list-header': CIListHeader,
  'ci-list-checkbox': CIListCheckbox,
  'ci-list-radio': CIListRadio,
  'ci-list-switch': CIListSwitch,

  'ci-loading': CILoading,
  'ci-navigation': CINavigation,
  'ci-pagination': CIPagination,
  'ci-offcanvas': CIOffcanvas,
  'ci-tab-bar': CITabBar,
  // 'ci-table': CITable,
  'ci-tree-nav': CITreeNav,

  /* for form */
  'ci-button': CIButton,
  'ci-link-button': CILinkButton,

  'ci-checkbox': CICheckbox,
  'ci-form': CIForm,
  'ci-form-group': CIFormGroup,
  'ci-image-picker': CIImagePicker,
  'ci-input': CIInput,
  'ci-number': CINumber,
  'ci-radio': CIRadio,
  'ci-select': CISelect,
  'ci-switch': CISwitch,

  /* form modal */
  'ci-modal': CIModal,
  'ci-actions': CIActions,
  'ci-alert': CIAlert,
  'ci-confirm': CIConfirm,

  'ci-rate': CIRate,
  'ci-scroll-view': CIScrollView,
  'ci-slider': CISlider,
  'ci-slide-view': CISlideView,
  'ci-slide-view-item': CISlideViewItem,
  'ci-sticky': CISticky,
  'ci-toast': CIToast,
  'ci-to-top': CIToTop
}

// export default {
module.exports = {
  name: 'CafeinitVue for AmazeUI',
  ver: '1.0.0',

  components: (Vue) => {
    for (let name in CIComponents) {
       Vue.component(name, CIComponents[name])
    }
  },

  utils: {
    CICompnentHelper: CICompnentHelper,
    CIScrollHelper: CIScrollHelper
  }
}
