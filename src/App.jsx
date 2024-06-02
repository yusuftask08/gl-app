/** Components */
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';

/** Style */
import './App.scss'

/** Icons */
import PortalIcon from './Components/Icons/SidebarIcons/PortalIcon'
import ConsoleIcon from './Components/Icons/SidebarIcons/ConsoleIcon'
import AppManagerIcon from './Components/Icons/SidebarIcons/AppManagerIcon'
import DatasourceIcon from './Components/Icons/SidebarIcons/DatasourceIcon'
import StudioIcon from './Components/Icons/SidebarIcons/StudioIcon'
import FlowMachineIcon from './Components/Icons/SidebarIcons/FlowMachineIcon'
import MicroFuncIcon from './Components/Icons/SidebarIcons/MicroFuncIcon'
import PostIcon from './Components/Icons/PostIcon';

/** Sidebar Items */
const items = [
  {
    category: 'Tüm Hizmetler',
    subcategories: [
      { id: 1, name: 'Portal (Home)', icon: <PortalIcon /> },
      { id: 2, name: 'Studio', icon: <StudioIcon /> },
      { id: 3, name: 'Datasources', icon: <DatasourceIcon /> },
      { id: 4, name: 'Flow Machine', icon: <FlowMachineIcon /> },
      { id: 5, name: 'Micro Functions', icon: <MicroFuncIcon />},
      { id: 6, name: 'Gateway', icon: <MicroFuncIcon /> },
      { id: 7, name: 'File Storage', icon: <PostIcon /> },
    ],
  },
  {
    category: 'Kategoriler',
    subcategories: [
      { id: 8, name: 'Application Manager', icon: <AppManagerIcon /> },
      { id: 9, name: 'Monitoring', icon: <FlowMachineIcon />},
      { id: 10, name: 'Console', icon: <ConsoleIcon /> },
    ],
  },
];

function App() {
  return (
    <div className="app">
      <Navbar />
      <Sidebar items={items} />
      <div className="content"></div>
    </div>
  )
}

export default App
