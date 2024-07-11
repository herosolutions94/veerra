import Link from 'next/link'
import RangeSlider from './range-slider';
import {Tooltip, Button} from "@nextui-org/react";
import Image from 'next/image';
export default function AsSeller() {
    return (
        <div className="for_buyer">
            <div className="flex">
            <div className="col">
                <h4>Seller's Agent Commission</h4>
                <RangeSlider min={0} max={3} step={0.01} />
            </div>
            <div className="col">
                <h4>Buyer's Agent Commission</h4>
                <RangeSlider min={0} max={3} step={0.01} />
            </div>
            </div>
            <div className="flex_res">
            <div className="res_col">
                <h5>Sale Price</h5>
                <select name="sale_price" className="input">
                <option>$234,454</option>
                <option>$334,454</option>
                </select>
            </div>

            <div className="res_col">
                <h5>You Saved</h5>
                <input type="text" className="input" name="saved" value={"$2,454"}/>
                <div className='tool_info' data-tooltip = "Calculated based on a commission rate of 3%">
                    <Image src="/images/info.svg" width={100} height={100} alt=""/>
                </div>
            </div>
            </div>
        </div>
    );
}