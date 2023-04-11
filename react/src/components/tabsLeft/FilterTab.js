import React from 'react';
import TabItem from '../custom/TabItem';
import Filters from "./contents/filter/Filters";
import AddSub from "./contents/filter/AddSub";
import Dec2D from "./contents/filter/Dec2D";
import Dec3D from "./contents/filter/Dec3D";
import FocusStack from "./contents/filter/FocusStack";
import Divider from '@mui/material/Divider';
// import SR from "./contents/filter/SR";

export default function FilterTab() {
    // const refresh = () => {
    //     console.log("click refresh");
    // };
    // const help = () => {
    //     console.log("click help");
    // };
    // buttons={true} refresh={refresh} help={help}
    return (
        <TabItem title="Filter">
            <Filters />
            <Divider />
            <AddSub />
            <Divider />
            <Dec2D />
            <Divider />
            <Dec3D />
            <Divider />
            <FocusStack />
            {/* <Divider />
            <SR /> */}
        </TabItem>
    );
};
