import { UpdateSidebarType } from '@/app/redux/slices/app'
import { dispatch } from '@/app/redux/store'
import { Grid, IconButton, Typography } from '@mui/material'
import { CaretLeft } from 'phosphor-react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React from 'react'
import { faker } from '@faker-js/faker';
import { Shared_Documents, Shared_Links } from '@/app/data';
import { DocumentMessage, LinkMessage } from '../conversations/messages/MsgTypes';

const SharedMessages = () => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className=' h-[100%] w-full flex flex-col border-l-2 '>
  {/* Header */}
 <div className='h-16 bg-violet-200 flex flex-row gap-1 items-center p-3 '>
            <IconButton onClick={()=>dispatch(UpdateSidebarType('CONTACT'))}>
                <CaretLeft size={20} />
            </IconButton>
            <Typography variant='subtitle2'>Shared Messages</Typography>
            
        </div>
        
        {/* BODY */}
 <div className='flex flex-col flex-grow gap-2  bg-slate-100 p-4 overflow-y-scroll scrollbar-thin'>
 <Tabs value={value} onChange={handleChange} centered className="px-2 pt-2">
        <Tab label="Media" />
        <Tab label="Links" />
        <Tab label="Documents" />
      </Tabs>
<div className={value === 1 ? 'p-1' : 'p-3'}>
      { (()=>{

switch(value){
  case 0:
    return (<Grid container spacing={2}>
   {[1,2,3,4,5,6,7,8].map((el,i)=>{
    return (<Grid item key={i} xs={4}>
<img src={faker.image.avatar()} alt={faker.name.fullName()}/>
    </Grid>)
   })}
    </Grid>);
    case 1 :
      return Shared_Links.map((el,i)=><LinkMessage el={el} key={i}/>);
      case 2:
        return Shared_Documents.map((el,i)=><DocumentMessage key={i} el={el}/>);
        default:
          break
}

        })()
      }
</div>

</div>
    </div>
  )
}

export default SharedMessages
