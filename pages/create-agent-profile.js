import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import PhoneNumberInput from "@/components/PhoneNumberInput";

const CreateAgentProfile = () => {
  const [file, setFile] = useState(null);
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  return (
    <>
      <main>
        <section className="profile_forms">
            <div className="contain">
                <div className="sub_contain">
                    <h2>Create Agent Profile Details</h2>
                    <form action="" >
                        <div className="flex">
                            <div className="colL">
                                <div className="inner long_form_pro">
                                    <div className="flex">
                                        <div className="lbl_area">
                                            <label className="form_lbl_pro" htmlFor="name">Name <sup>*</sup></label>
                                        </div>
                                        <div className="field_area">
                                            <input type="text" name="name" className="input" />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="lbl_area">
                                            <label className="form_lbl_pro" htmlFor="brokerage_name">Brokerage Name <sup>*</sup></label>
                                        </div>
                                        <div className="field_area">
                                            <input type="text" name="brokerage_name" className="input" />
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="lbl_area">
                                            <label className="form_lbl_pro" htmlFor="brokerage_location">Brokerage Location <sup>*</sup></label>
                                        </div>
                                        <div className="field_area">
                                            <input type="text" name="brokerage_location" className="input" />
                                            <div className="flex_3">
                                                <div className="col">
                                                    <input type="text" name="city" className="input" placeholder="City"/>
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="state" className="input" placeholder="State"/>
                                                </div>
                                                <div className="col">
                                                    <input type="text" name="zip" className="input" placeholder="Zip"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="lbl_area">
                                            <label className="form_lbl_pro" htmlFor="brokerage_phone">Brokerage Phone Number <sup>*</sup></label>
                                        </div>
                                        <div className="field_area">
                                        <PhoneNumberInput />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="colR">
                                <div className="inner">
                                    <div className="form_lbl_pro">Add Professional Portrait <sup>*</sup></div>
                                    <input type="file" name="portrait" id="portrait" hidden />
                                    <label className="file_upload_portrait" htmlFor="portrait">
                                        <div className="img_icon">
                                            <Image src="/images/user_icon.svg" width={200} height={200} alt="upload portrait" />
                                        </div>
                                        <p>Browse <span>(3 MB max)</span></p>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
      </main>
    </>
  );
};

export default CreateAgentProfile;
