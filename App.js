import logo from './logo.svg';
import './App.css';
import { DefaultButton, PrimaryButton } from '@fluentui/react/lib/Button';
import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import { DatePicker, DayOfWeek, Dropdown,DropdownMenuItemType,IDropdownStyles, IDropdownOption, mergeStyles, DocumentCardLogo } from '@fluentui/react';
const dropdownStyles: Partial<IDropdownStyles> = {
  dropdown: { width: 190},
};
const options: IDropdownOption[] = [{ key: 'optionHeader', text: 'priority', itemType: DropdownMenuItemType.Header },
{ key: 'low', text: 'low' },
{ key: 'medium', text: 'medium' },
{ key: 'high', text: 'high'}];
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>
          project portfolio Management
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br/>
        
        <TextField label="project name" placeholder="project name " />  
      <TextField label="requester name" placeholder="requester name " />  
      <TextField label="Business_Unit" placeholder="Business_Unit " /> 
<br/>
      <DatePicker  placeholder="Start date..." ariaLabel="Start date" />
      <br/>
      <DatePicker  placeholder="end date..." ariaLabel="end date" />
      <Dropdown
        placeholder="Business priority"
        label="Multi-select uncontrolled example"
        //defaultSelectedKeys={['low', 'medium', 'high']}
        multiSelect
        options={options}
        styles={dropdownStyles}
      />
      <br/>
      <PrimaryButton text="Submit" />
      </header>
    </div>
  );
}

export default App;
