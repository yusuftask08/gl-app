/** Components */
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';

/** Styles */
import './App.scss'

/** Icons */
import PortalIcon from './Components/Icons/SidebarIcons/PortalIcon'
import ConsoleIcon from './Components/Icons/SidebarIcons/ConsoleIcon'
import AppManagerIcon from './Components/Icons/SidebarIcons/AppManagerIcon'
import DatasourceIcon from './Components/Icons/SidebarIcons/DatasourceIcon'
import StudioIcon from './Components/Icons/SidebarIcons/StudioIcon'
import FlowMachineIcon from './Components/Icons/SidebarIcons/FlowMachineIcon'
import MicroFuncIcon from './Components/Icons/SidebarIcons/MicroFuncIcon'
import PostIcon from './Components/Icons/NavbarIcons/PostIcon';
import Form from './Components/Form/Form';

/** Sidebar Items */
const items = [
  {
    category: 'Tüm Hizmetler',
    subcategories: [
      { id: 1, name: 'Portal (Home)', icon: <PortalIcon /> },
      { id: 2, name: 'Studio', icon: <StudioIcon /> },
      { id: 3, name: 'Datasources', icon: <DatasourceIcon /> },
      { id: 4, name: 'Flow Machine', icon: <FlowMachineIcon /> },
      { id: 5, name: 'Micro Functions', icon: <MicroFuncIcon /> },
      { id: 6, name: 'Gateway', icon: <MicroFuncIcon /> },
      { id: 7, name: 'File Storage', icon: <PostIcon /> },
    ],
  },
  {
    category: 'Kategoriler',
    subcategories: [
      { id: 8, name: 'Application Manager', icon: <AppManagerIcon /> },
      { id: 9, name: 'Monitoring', icon: <FlowMachineIcon /> },
      { id: 10, name: 'Console', icon: <ConsoleIcon /> },
    ],
  },
];

function App() {
  return (
    <div className="app">
      <Navbar />
      <div className="contact-page">
        <div className="sidebar-container">
          <Sidebar items={items} />
        </div>
        <div className="content">
          <div className="content-badge">
            <span>  Home / ..... / Workflow / Visual Workflow / </span>
            Current page
          </div>
          <div className="content-text">
            <h3> Visual workflow automation.Now with code.</h3>
            <span className="content-sub-text">
              This is commonly used in the expressive type theme layouts for long paragraphs with more than four lines. The looser line height and larger size makes for comfortable, long-form reading, in mediums that allow for more space. This size type is rarely used for body copy in components. We always left-align type; we never center it.
            </span>
          </div>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default App
