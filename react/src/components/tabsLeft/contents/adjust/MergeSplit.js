import SmallCard from '../../../custom/SmallCard'
import CustomButton from '../../../custom/CustomButton'
import {
    mdiCog
} from '@mdi/js';
export default function MergeSplit() {
    const select1 = () => {
        console.log("Select-1")
    }
    const select2 = () => {
        console.log("Select-2")
    }
    const select3 = () => {
        console.log("Select-3")
    }
    const select4 = () => {
        console.log("Select-4")
    }
    return (
        <div className=''>
            <SmallCard title="Merge & Split" >
                <CustomButton image="c-sep" label="" click={select1} />
                <CustomButton image="c-merge" label="" click={select2} />
                <CustomButton image="c-drop" label="" click={select3} />
                <CustomButton icon={mdiCog} label="" click={select4} />
            </SmallCard>
        </div>
    )
}