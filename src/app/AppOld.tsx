/* import { BrowserRouter } from "react-router-dom";
import { observer } from 'mobx-react';

export const App = observer(function App() {
  return <BrowserRouter router={router} />;
});
export default App;
 */

import { Autocomplete, Button, TextField } from "shared/ui";
import "./index.scss";
import "../shared/assets/fonts/fonts.css";
import { InlineCheckbox } from "shared/ui/InlineCheckbox";
import { Typography } from "shared/ui/Typography";
import { Slider } from "shared/ui/Slider";
import React from "react";
import { RadioButtons } from "shared/ui/RadioButtons";
import { RadioCheckbox } from "shared/ui/RadioCheckbox";
import { Progress } from "shared/ui/Progress";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { callToast } from "shared/lib/callToast";
import { useCopy } from "features/useCopy";
import { Accordion } from "shared/ui/Accordion";
/* import { observer } from 'mobx-react'; */

export const AppOld = () => {
    const options = [
        { id: 1, label: "Option 1" },
        { id: 2, label: "Option 2" },
        { id: 3, label: "Option 3" },
        { id: 4, label: "Option 4" },
        { id: 5, label: "Option 5" },
    ];

    const { copy } = useCopy();

    return (
        <div>
            <div>
                <ToastContainer /* limit={5} */ />
                <Button
                    variant={"secondary"}
                    onClick={() =>
                        callToast({ message: "Type Success", type: "success" })
                    }
                    startIcon={
                        <>
                            <svg
                                width="12"
                                height="17"
                                viewBox="0 0 12 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 3.36146C7.66667 6.56284 6.66667 8.27569 5 8.5C5 8.5 6.5 2.88125 4.5 0C4.5 0 4.28792 3.08721 2.14499 6.7918C1.14049 8.52832 0 9.69894 0 12.0052C0 15.2982 3.51144 17 6.00572 17C8.5 17 12 15.8475 12 11.8136C12 10.1549 10.6667 7.33749 8 3.36146Z"
                                    fill="white"
                                />
                            </svg>
                        </>
                    }
                >
                    Top offers!
                </Button>
                <Button
                    onClick={() =>
                        callToast({ message: "Type Warning", type: "warning" })
                    }
                >
                    Piloted
                </Button>

                <Button
                    onClick={() => callToast({ message: "Type Error", type: "error" })}
                    variant={"pale"}
                >
                    NA West
                </Button>
                <Button onClick={() => copy("copied 123")} variant={"copy"}>
                    Copy
                </Button>

                <InlineCheckbox
                    checked={true}
                    label="All Brimstone portals"
                    bait="+$100"
                />
                <InlineCheckbox checked={false} label="All Brimstone portals" />
                <InlineCheckbox
                    checked={true}
                    type={"radio"}
                    label="Champions/Roles"
                    bait={"+15"}
                    baitColor="orange"
                />
                <InlineCheckbox
                    checked={false}
                    type={"radio"}
                    label="Priority Order"
                    bait={"+20%"}
                    baitColor="orange"
                />
                <InlineCheckbox
                    checked={true}
                    type={"radio"}
                    label="Stream Games"
                    bait={"FREE FREE FREE FREE"}
                />

                <TextField label={"Input with button"} placeholder={"Placeholder"}>
                    <Button>Apply</Button>
                </TextField>
                <TextField
                    label={"Input with button number maxLength 4"}
                    placeholder={"Number"}
                    type={"number"}
                    maxLength={4}
                >
                    <Button>Apply</Button>
                </TextField>
                <TextField
                    label={"default input with label"}
                    placeholder={"Placeholder"}
                />
                <TextField placeholder={"without label"} />
                <TextField
                    label={"Input with button number maxLength 4"}
                    placeholder={"Number"}
                    maxLength={4}
                    background="black"
                    type="copy"
                />
                <Autocomplete options={options} placeholder={"Choose your server"} />
                <Autocomplete
                    options={options}
                    variant={"gray"}
                    placeholder={"Choose your server"}
                />
                <Autocomplete
                    value={3}
                    options={options}
                    variant={"gray_small"}
                    placeholder={"Choose your server"}
                />

                <Typography component={"p"} color={"platinum"} fontSize={"32px"}>
                    Component p font-size 32px
                </Typography>
                <Typography component={"h1"}>Component h1</Typography>
                <Typography component={"h2"}>Component h2</Typography>
                <Typography component={"h3"}>Component h3</Typography>
                <Typography component={"a"} color={"platinum"} href={"#"}>
                    Component a
                </Typography>
                <Typography component={"p"} color={"green"}>
                    Component p green
                </Typography>
                <Typography component={"p"} color={"red"}>
                    Component p red
                </Typography>
                <Typography component={"p"} color={"cooper"}>
                    Component p cooper
                </Typography>
                <Typography component={"p"} color={"cooper-light"}>
                    Component p cooper-light
                </Typography>
                <Typography component={"p"} color={"platinum-50"}>
                    Component p platinum 50
                </Typography>
                <Typography component={"p"} color={"platinum-15"}>
                    Component p platinum 15
                </Typography>
                <Typography component={"p"} color={"platinum-5"}>
                    Component p platinum 5
                </Typography>

                <Typography component={"p"} color={"platinum"} fontSize={"10px"}>
                    Component p font-size 10px
                </Typography>
            </div>

            <div>
                <Slider max={200} value={50} style={"big"} step={20} />
                <Slider max={200} value={[40, 120]} style={"big"} disableSwap />
                <Slider max={200} value={50} style={"medium"} />
                <Slider max={200} value={[40, 120]} style={"medium"} disableSwap />
                <div style={{ marginTop: "20px" }}>
                    <Slider max={200} value={70} style="small" />
                    <Slider max={200} value={[100, 190]} disableSwap style="small" />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <RadioButtons
                        value={2}
                        buttons={[
                            { label: "Button1" },
                            { label: "Button2" },
                            { label: "Button3" },
                        ]}
                    />
                </div>
                <RadioButtons
                    value={1}
                    buttons={[{ label: "Button1" }, { label: "Button2" }]}
                />
                <RadioButtons
                    type={"discrete"}
                    buttons={[{ label: "Button1" }, { label: "Button2" }]}
                />
                <RadioCheckbox checked={true} />
                <RadioCheckbox checked={false} />

                <Progress value={78} label={"IN Progress"} />

                <Accordion
                    header={"Which regions and platforms do we serve?"}
                    children={
                        <Typography color={"cooper-light"} fontSize="14px">
                            Our services are available worldwide and <br /> on all platforms
                            (PC/XBOX/PS4/ MOBILE/ NINTENDO)
                        </Typography>
                    }
                />
            </div>
        </div>
    );
};
export default AppOld;
