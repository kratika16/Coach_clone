import _ from "lodash";
import React, {useState, Fragment} from 'react';
import Update from './Update';
import Display from './Display';
import { useSelector } from "react-redux";

const Section = () => {
  const { setting } = useSelector((state) => state.setting);
  const [editContactId, setEditContactId]= useState(null);
  const [pcode, setPcode]= useState(+1);
  const [pnumber, setPnumber]= useState("");

  const handleEditClick=(event, row)=>{
    event.preventDefault();
    setEditContactId(row.setid);
  }
  return (
    <div className= "grid bg-grey px-5 py-6 grid-cols-1 lg:grid-cols-3">
      <div className="text-xl font-semibold">
        Please update your mobile number for text SMS alert service.
      </div>
         { _.map(setting, (row,i)=>{
          return(
            <Fragment>
            {editContactId===row.setid? <Update rowid={row.setid} editContactId={editContactId} setEditContactId={setEditContactId}/>: <Display row={row} i={i} handleEditClick={handleEditClick}/>}
          </Fragment>
          );
         })}
    </div>
  )
}

export default Section