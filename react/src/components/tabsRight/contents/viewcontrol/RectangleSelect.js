import * as React from 'react';
import {
    mdiNearMe,
    mdiPencil,
    mdiCheckboxBlankCircleOutline,
    mdiDotsVertical,
    mdiVectorRectangle,
    mdiSquareEditOutline,
    mdiTrashCanOutline,
} from '@mdi/js';
import CustomButton from "../../../custom/CustomButton";
import SmallCard from "../../../custom/SmallCard";
export default function RectangleSelect(props) {

    const onSelect1 = () => {
        console.log("click onSelect1");
    };

    return (
        <SmallCard title="RectangleSelect">
            <div>
                <CustomButton icon={mdiNearMe} click={onSelect1} />
                <CustomButton icon={mdiPencil} click={onSelect1} />
                <CustomButton icon={mdiCheckboxBlankCircleOutline} click={onSelect1} />
                <CustomButton icon={mdiDotsVertical} click={onSelect1} />
                <CustomButton icon={mdiVectorRectangle} click={onSelect1} />
                <CustomButton icon={mdiSquareEditOutline} click={onSelect1} />
                <CustomButton icon={mdiTrashCanOutline} click={onSelect1} />
            </div>
        </SmallCard>
    );
};
