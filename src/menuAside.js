import {
  mdiPlus,
  mdiViewDashboard,
  mdiBullhornOutline,
  mdiImage,
  mdiResize,
  mdiFolderMultipleOutline,
  mdiFolderImage,
} from '@mdi/js'

export default [
    {
    to: '/create-content',
    icon: mdiPlus,
    label: 'Create Content',
  },
  {
    to: '/dashboard',
    icon: mdiViewDashboard,
    label: 'Dashboard',
  },
  {
    label: 'Ads Manager',
    icon: mdiBullhornOutline,
    menu: [
      { to: '/ads/image-generator', icon: mdiImage, label: 'Image Generator' },
      { to: '/ads/resolution', icon: mdiResize, label: 'Resolution' },
      { to: '/ads/group', icon: mdiFolderMultipleOutline, label: 'Ads Manager Group' },
    ],
  },
  {
    to: '/assets-library',
    icon: mdiFolderImage,
    label: 'Assets Library',
  },
]
