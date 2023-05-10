import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';

import { callToast } from 'shared/lib/callToast';
import { useCopy } from 'features/useCopy';
import {
    Autocomplete,
    Button,
    TextField,
    InlineCheckbox,
    Typography,
    Slider,
    RadioButtons,
    RadioCheckbox,
    Progress,
    Accordion,
    Label,
    Card,
    ButtonsGroup,
    TextString,
    CardGroup,
    TypographyGroup,
    BigLabel,
    Tags,
    ITag,
    Menu,
    Games,
} from 'shared/ui';

import { 
    ArrowIcon, 
    CartIcon, 
    ClockIcon, 
    EmailIcon, 
    FireIcon, 
    GameIcon, 
    PaymentIcon, 
    SocialIcons, 
    StarIcon,
    RankIcon,
    PasswordIcon
} from 'shared/assets/svg';

import img1 from '../../shared/assets/img/img1.png'
import img2 from '../../shared/assets/img/img2.png'
import img3 from '../../shared/assets/img/img3.png'
import modallogo from '../../shared/assets/img/modallogo.png'
import { Header } from '../../app/components/common/Header';
import { Modal } from '../../app/components/common/Modal';
import { Coupon } from '../../app/components/common/Coupon';
import { OnlineSupport } from '../../app/components/common/OnlineSupport';
import { Login } from '../../app/components/common/Login';

interface IProps {
    setMenuSpecial?: (value: boolean) => void;
    menuSpecial?: boolean;
}


export const UiKit: React.FC<IProps> = (props) => {
    const [ showGamesMenu, setShowGamesMenu ] = useState<boolean>(false);
    const [ menuSpecial, setMenuSpecial ] = useState<boolean>(false);
    const {  } = props

    const options = [
        { id: 1, label: 'Add no wins after 7-0' },
        { id: 2, label: 'Option 2' },
        { id: 3, label: 'Option 3' },
        { id: 4, label: 'Option 4' },
        { id: 5, label: 'Option 5' },
    ];

    const optionsImg = [
        { id: 1, label: 'ANY LANE', img: img2 },
        { id: 2, label: 'Option 2', img: img2 },
        { id: 3, label: 'Option 3', img: img2 },
        { id: 4, label: 'Option 4', img: img2 },
        { id: 5, label: 'Option 5', img: img2 },
    ];

    const optionsSrv = [
        { id: 1, label: 'All' },
        { id: 2, label: 'Option 2' },
    ];

    const tags: ITag[] = [
        {
            name: 'RSS',
            color: 'green',
        },
        {
            name: 'Xbox',
        },
        {
            name: 'Champions',
            color: 'cooper',
        },
        {
            name: '+90- Points',
            color: 'purple',
        },
        {
            name: 'Europe',
            color: 'blue',
        },
        {
            name: 'First order',
            color: 'red',
        }
    ]

    const { copy } = useCopy();

    return (  
        <>
            <Header menuSpecial={menuSpecial} setMenuSpecial={setMenuSpecial} setShowGamesMenu={setShowGamesMenu} showGamesMenu={showGamesMenu}/>
            {showGamesMenu 
                && <div className='app__special'>
                    <Menu setMenuSpecial={setMenuSpecial} menuSpecial={menuSpecial} />
                    <Games />
                </div>
            }

            {showGamesMenu && <div className='app__hider'></div>}
            <div className='app__content'>

                <Modal
                    title={<>
                        <Typography component={'p'} color={'platinum'} fontSize='16px'>
                            Cakeboost Coupons
                        </Typography>
                        <Typography component={'p'} color={'cooper-light'} fontSize='12px'>
                            Avalibe for this week
                        </Typography>
                    </>}
                    inline={true}
                >
                    <Coupon 
                        title={<>
                            <Typography component={'p'} color={'cooper-light'} fontSize='16px'>
                                Valid to 24.11.2022
                            </Typography>
                        </>}
                    >
                        <Typography component={'p'} color={'platinum'} fontSize='18px'>
                            Save 8% at<br/>checkout
                        </Typography>
                        <Typography component={'p'} color={'cooper-light'} fontSize='14px'>
                            Valid for WotLK<br/>leveling amd gearing
                        </Typography>
                    </Coupon>

                    <Coupon 
                        title={<>
                            <Typography component={'p'} color={'cooper-light'} fontSize='16px'>
                                Valid to 24.11.2022
                            </Typography>
                        </>}
                    >
                        <Typography component={'p'} color={'platinum'} fontSize='18px'>
                            Save 8% at<br/>checkout
                        </Typography>
                        <Typography component={'p'} color={'cooper-light'} fontSize='14px'>
                            Valid for WotLK<br/>leveling amd gearing
                        </Typography>
                    </Coupon>

                    <Coupon 
                        title={<>
                            <Typography component={'p'} color={'cooper-light'} fontSize='16px'>
                                Valid to 24.11.2022
                            </Typography>
                        </>}
                    >
                        <Typography component={'p'} color={'platinum'} fontSize='18px'>
                            Save 8% at<br/>checkout
                        </Typography>
                        <Typography component={'p'} color={'cooper-light'} fontSize='14px'>
                            Valid for WotLK<br/>leveling amd gearing
                        </Typography>
                    </Coupon>

                    <Coupon 
                        title={<>
                            <Typography component={'p'} color={'cooper-light'} fontSize='16px'>
                                Valid to 24.11.2022
                            </Typography>
                        </>}
                    >
                        <Typography component={'p'} color={'platinum'} fontSize='18px'>
                            Save 8% at<br/>checkout
                        </Typography>
                        <Typography component={'p'} color={'cooper-light'} fontSize='14px'>
                            Valid for WotLK<br/>leveling amd gearing
                        </Typography>
                    </Coupon>
                </Modal>

                <Modal
                    title={<>
                        <Typography component={'p'} color={'platinum'} fontSize='20px'>
                            ONLINE SUPPORT 24/7
                        </Typography>
                    </>}
                >
                    <OnlineSupport />
                </Modal>

                <Modal
                    endLogo={<img src={modallogo}/>}
                    inline={true}
                >
                        <div>
                            <Typography component={'p'} color={'platinum'} fontSize='24px'>
                                Get 10% discount on<br/>your next purchase
                            </Typography>
                            <Typography component={'p'} color={'cooper-light'} fontSize='14px'>
                                Subscribe to our weekly newsletter and<br/>
                                we will immediately send you a 10% off<br/>
                                coupon code. You can unsubscribe<br/>
                                anytime with one click.
                            </Typography>
                            <Label noLine noUpperCase customStyles={[ 'small' ]}>
                                Your email
                            </Label>
                            <Button variant='lcooper' className='align-left'>
                                <EmailIcon color='cooper-light'/>example@gmail.com
                            </Button>
                            <Button className='fit-content'>Get 10% discount</Button>
                        </div>
                </Modal>

                <Modal
                    title={<>
                        <Typography component={'p'} color={'platinum'} fontSize='18px'>
                            Login
                        </Typography>
                    </>}
                >
                   <Login />
                </Modal>

                <Card black={true}>
                    <CardGroup justify='start' gap='1-5' align='start'>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                Game
                            </Typography>
                            <Autocomplete
                                options={optionsSrv}
                                value={1}
                                width={'14rem'}
                            />
                        </div>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                Servers
                            </Typography>
                            <Autocomplete
                                options={optionsSrv}
                                value={1}
                                width={'14rem'}
                            />
                        </div>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                Account Role
                            </Typography>
                            <Autocomplete
                                options={optionsSrv}
                                value={1}
                                width={'14rem'}
                            />
                        </div>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                Champions
                            </Typography>
                            <Autocomplete
                                options={optionsSrv}
                                value={1}
                                width={'20rem'}
                            />
                            <Slider max={162} min={5} value={[10, 130]} disableSwap
                                marks={[{ value: 5, label: 5 }, { value: 162, label: 162 }]}
                                valueLabelDisplay='off'
                                customStyles={[ 'medium', 'cooper-light' ]}
                            />
                        </div>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                Skins
                            </Typography>
                            <TextField
                                width='14rem'
                                placeholder='Search for skins'
                                background='gradient'
                            />
                        </div>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                Price
                            </Typography>
                            <Slider max={1000} min={5} value={[10, 500]} disableSwap
                                marks={[{ value: 5, label: 5 }, { value: 1000, label: 1000 }]}
                                valueLabelDisplay='off'
                                customStyles={[ 'medium', 'cooper-light' ]}
                            />
                        </div>
                    </CardGroup>
                    <CardGroup justify='start' gap='1-5' align='start'>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                Rank
                            </Typography>
                            <CardGroup justify='start' gap='1' customStyles={[ 'wrap' ]}>
                                <InlineCheckbox type='button'
                                    label='Unranked'
                                    icon={<RankIcon icon='unranked' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Iron'
                                    icon={<RankIcon icon='iron' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Bronze'
                                    icon={<RankIcon icon='bronze' />}
                                />
                                <InlineCheckbox type='button'
                                    label='silver'
                                    icon={<RankIcon icon='silver' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Gold'
                                    icon={<RankIcon icon='gold' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Platinum'
                                    icon={<RankIcon icon='platinum' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Diamond'
                                    icon={<RankIcon icon='diamond' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Master'
                                    icon={<RankIcon icon='master' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Grandmaster'
                                    icon={<RankIcon icon='grandmaster' />}
                                />
                                <InlineCheckbox type='button'
                                    label='Challenger'
                                    icon={<RankIcon icon='challenger' />}
                                />
                            </CardGroup>
                        </div>
                        <div>
                            <Typography component={'p'} color={'cooper-light'} fontSize='18px'>
                                LP Gain
                            </Typography>
                            <Autocomplete
                                options={optionsSrv}
                                value={1}
                                width={'20rem'}
                            />
                        </div>
                    </CardGroup>
                </Card>

                <Card>
                    <ButtonsGroup justify='end'>
                        <Button
                            variant={'secondary'}
                            onClick={() =>
                                callToast({ message: 'Type Success', type: 'success' })
                            }
                            startIcon={<FireIcon/>}
                        >
                            Top offers!
                        </Button>
                    </ButtonsGroup>
                    <Label>Boost Mode</Label>
                    <Button>
                        Piloted
                    </Button>
                    <Label>Region</Label>
                    <ButtonsGroup>
                        <Button>
                            NA East
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            NA West
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            EU Central
                        </Button>
                    </ButtonsGroup>
                    <ButtonsGroup>
                        <Button
                            variant={'pale'}
                        >
                            SA
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            Australlia
                        </Button>
                    </ButtonsGroup>
                    <Label>Server Options</Label>
                    <ButtonsGroup>
                        <Button>
                            Old servers
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            Fresh Server +$54.04
                        </Button>
                    </ButtonsGroup>
                    <Label>Additional Options</Label>
                    <InlineCheckbox
                        checked
                        label='All Brimstone portals'
                        bait='+$100'
                    />
                    <InlineCheckbox
                        checked={false}
                        label='All Brimstone portals'
                        bait='+$100'
                    />
                    <TextField label={'Discount code'} placeholder={'Your discount'} background='black'>
                        <Button>Apply</Button>
                    </TextField>
                    <TextString>
                        <Typography color={'platinum'} fontSize='16px' >
                            Total amount
                        </Typography>
                        <div>
                            <Typography component={'p'} color={'platinum'} fontSize='16px' align='right'>
                                €13.9
                            </Typography>
                            <Typography component={'p'} color={'platinum'} fontSize='16px' align='right'>
                                + €2.6 VAT
                            </Typography>
                        </div>
                    </TextString>
                    <ButtonsGroup justify='between' type='contained'>
                        <Button>
                            Buy now
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            Add to cart
                        </Button>
                    </ButtonsGroup>
                </Card>
                <Card>
                    <ButtonsGroup justify='end'>
                        <Button
                            variant={'secondary'}
                            onClick={() =>
                                callToast({ message: 'Type Success', type: 'success' })
                            }
                            startIcon={<FireIcon/>}
                        >
                            Top offers!
                        </Button>
                    </ButtonsGroup>
                    <Label>Boost Mode</Label>
                    <Button>
                        Piloted
                    </Button>
                    <Label>Region</Label>
                    <ButtonsGroup>
                        <Button>
                            NA East
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            NA West
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            EU Central
                        </Button>
                    </ButtonsGroup>
                    <ButtonsGroup>
                        <Button
                            variant={'pale'}
                        >
                            SA
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            Australlia
                        </Button>
                    </ButtonsGroup>
                    <Label>Server Options</Label>
                    <ButtonsGroup>
                        <Button>
                            Old servers
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            Fresh Server +$54.04
                        </Button>
                    </ButtonsGroup>
                    <Label>Additional Options</Label>
                    <Autocomplete
                        options={options}
                        variant={'gray'}
                        placeholder={'Choose your server'}
                    />
                    <Slider max={200} value={[0, 54]} disableSwap customStyles={['small']} valueLabelDisplay='on'>
                        <TextField background='black' value={'54'}></TextField>
                    </Slider>
                    <ButtonsGroup type='contained'>
                        <Button
                            variant={'pale'}
                        >
                            Add 14 more for a 15% discount
                        </Button>
                    </ButtonsGroup>
            
                    <Slider max={200} value={[0, 100]} disableSwap valueLabelDisplay='on' customStyles={['small']}>
                        <CardGroup justify='between'>
                            <TextField
                                label={'Tracks completed'}
                                width='10rem'
                                value={'0'}
                            />
                            <ArrowIcon />
                            <TextField
                                label={'Desired track'}
                                width='10rem'
                                value={'100'}
                            />
                        </CardGroup>
                    </Slider>
                    <TextField label={'Discount code'} placeholder={'Your discount'} background='black'>
                        <Button>Apply</Button>
                    </TextField>
                    <TextString>
                        <Typography color={'platinum'} fontSize='16px' >
                            Total amount
                        </Typography>
                        <TypographyGroup direction={'column'}>
                            <div>
                                <Typography color={'platinum'} fontSize='22px'>
                                    €13.9
                                </Typography>
                                <Typography component={'s'} color={'platinum-50'} fontSize='12px'>
                                    €16.99
                                </Typography>
                            </div>
                            <Typography component={'p'} color={'cooper'} fontSize='12px'>
                                + cashback
                            </Typography>
                        </TypographyGroup>
                    </TextString>
                    <Typography color={'platinum-50'} fontSize='12px' className={['flex']}>
                        <ClockIcon/> 6 HOURS ORDER COMPLETION
                    </Typography>
                    <ButtonsGroup justify='between' type='contained'>
                        <Button>
                            Buy now
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            Add to cart
                        </Button>
                    </ButtonsGroup>
                </Card>
                <Card>
                    <ButtonsGroup justify='end'>
                        <Button
                            variant={'secondary'}
                            onClick={() =>
                                callToast({ message: 'Type Success', type: 'success' })
                            }
                            startIcon={<FireIcon/>}
                        >
                            Top offers!
                        </Button>
                    </ButtonsGroup>
                    <Label>Platform</Label>
                    <ButtonsGroup>
                        <Button>
                            PC
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            XBOX
                        </Button>
                        <Button
                            variant={'pale'}
                        >
                            PLAYSTATION
                        </Button>
                    </ButtonsGroup>
                    <Label>Competition Time</Label>
                    <p>
                        Completion time is unknown because the<br/>weapon drop rndomly <a href='/'>but you will get it guaranteed !</a>
                    </p>
                    <Label rightText='Desired rank'>Your rank</Label>
                    <ButtonsGroup justify='between'>
                        <Button variant='pale'>
                            Cooper I
                        </Button>
                        <Button variant='pale'>
                            Platinum I
                        </Button>
                    </ButtonsGroup>
                    <RadioButtons
                        value={2}
                        buttons={[
                            { label: 'USA' },
                            { label: 'Europe' }
                        ]}
                    />
                    <Autocomplete options={options} placeholder={'Choose your server'} />
                    <Label noLine color='platinum' noUpperCase>Checkboxes 1</Label>
                    <RadioButtons
                        value={1}
                        buttons={[
                            { label: 'US East' },
                            { label: 'US West' }
                        ]}
                        type='discrete'
                    />
                    <CardGroup gap='3'>
                        <Typography color={'platinum'} fontSize='12px' className={['flex', 'highlight']}>
                            <ClockIcon colored width={30} height={30}/> 15 min<br/>delivery time
                        </Typography>
                                    <Typography color={'platinum-50'} fontSize='18px'>
                                        34 929 000<br/>gold in stock
                        </Typography>
                                    <div>
                                        <Typography component={'div'} color={'cooper'} fontSize='42px' fontWeight='600'>
                                            10$
                                        </Typography>
                                        <Typography component={'div'} color={'platinum'} fontSize='16px' fontWeight='600'>
                                            For 10K gold
                                        </Typography>
                                    </div>
                        <Button>
                            Buy now <CartIcon/>
                        </Button>
                    </CardGroup>
            
                    <CardGroup justify='start' gap='1-5' image={img1}>
                        <div>
                            <Label noLine customStyles={['big']}>last season rank</Label>
                            <Autocomplete
                                options={options}
                                placeholder={'Chooser rank'}
                                value={2}
                                width={'17rem'}
                            />
                        </div>
                        <div>
                            <Label noLine customStyles={['big']}>current lp</Label>
                            <TextField
                                width='10rem'
                                value={'0'}
                                background='gradient'
                                customStyles={['center']}
                            />
                        </div>
                    </CardGroup>
                    <CardGroup justify='start' gap='1-5' image={img1}>
                        <div>
                            <Label noLine customStyles={['big']}>desierd devision</Label>
                            <Autocomplete
                                options={options}
                                placeholder={'Chooser rank'}
                                value={2}
                                width={'17rem'}
                            />
                        </div>
                        <RadioButtons
                            value={1}
                            buttons={[
                                { label: 'I' },
                                { label: 'II' },
                                { label: 'III' },
                                { label: 'IV' }
                            ]}
                            type='mosaic'
                        />
                    </CardGroup>
                </Card>
                <Card>
                    <InlineCheckbox
                        checked
                        type={'radio'}
                        label='Appear Offline On Chat'
                    />
                    <InlineCheckbox
                        checked
                        type={'radio'}
                        label='Champions/Roles'
                        bait={'+15'}
                        baitColor='orange'
                    />
                    <InlineCheckbox
                        checked={false}
                        type={'radio'}
                        label='Priority Order'
                        bait={'+20%'}
                        baitColor='orange'
                    />
                    <InlineCheckbox
                        checked
                        type={'radio'}
                        label='Stream Games'
                        bait={'FREE'}
                    />
                    <Autocomplete
                        options={optionsImg}
                        placeholder={'Chooser avatar'}
                        width={'25rem'}
                    />
                    <CardGroup>
                        <PaymentIcon type='paypal' />
                        <PaymentIcon type='visa' />
                        <PaymentIcon type='apple' />
                        <PaymentIcon type='google' />
                        <PaymentIcon type='bitcoin' />
                    </CardGroup>
                    <BigLabel>
                        <Typography fontSize='65px' color='cooper' fontWeight='900'>
                            3
                        </Typography>
                        <div>
                            <Typography component={'p'} color='platinum' fontSize='24px'>
                                Number of wins
                            </Typography>
                            <Typography component={'p'} color='cooper-light' fontSize='16px'>
                                Please select your desired number of victories
                            </Typography>
                        </div>
                    </BigLabel>
                    <BigLabel>
                        <Typography fontSize='65px' color='cooper' fontWeight='900'>
                            <img src={img3} alt='' />
                        </Typography>
                        <div>
                            <Typography component={'p'} color='platinum' fontSize='24px'>
                                Current League
                            </Typography>
                            <Typography component={'p'} color='cooper-light' fontSize='16px'>
                                Please select your Current Rank and Division
                            </Typography>
                        </div>
                    </BigLabel>
                    <Slider max={10} value={3} valueLabelDisplay='on' customStyles={['big', 'label']} step={1} />
                    <Slider max={10} value={3} valueLabelDisplay='on' customStyles={['big', 'label', 'noTrack']} step={1}
                        ariaValueText={'games'}
                    />
                    <Label noLine icon={<GameIcon icon='wow' />} customStyles={['button']} noUpperCase>
                        World of Warcraft
                    </Label>
                    <Label noLine icon={<StarIcon perc={60}/>} customStyles={['rating']} noUpperCase>
                        <div>
                            <Typography>5.0</Typography>
                            <Typography color='cooper-light'>&nbsp;(155)</Typography>
                        </div>
                    </Label>
                    <TextField
                        label={'Login name'}
                        placeholder={'Enter your login name'}
                        background='black'
                        type='copy'
                    />
                    <CardGroup >
                        <Typography>Chat</Typography>
                        <Label noLine customStyles={['button', 'small', 'black']} noUpperCase
                            color='platinum-50'
                        >
                            Personal manager
                        </Label>
                        <Autocomplete
                            value={3}
                            options={options}
                            variant={'gray_small'}
                            placeholder={'Choose your server'}
                            width='10rem'
                        />
                        <Button customStyles={[ 'small' ]}>
                            Tip
                        </Button>
                    </CardGroup>
                    <Tags tags={tags} label='Details'></Tags>
                    <Progress value={45} label={'IN Progress'} />
                    <TextField
                        placeholder={'Your message'}
                        type={'chat'}
                        background='black'
                    />
                    <Button variant='close'>X</Button>
                    <Label noLine noUpperCase customStyles={[ 'small' ]}>
                        Your email
                    </Label>
                    <Button variant='lcooper'>
                        <EmailIcon color='cooper-light'/>example@gmail.com
                    </Button>
                    <CardGroup>
                        <Button variant='icon'>
                            <SocialIcons icon='facebook' />
                        </Button>
                        <Button variant='icon'>
                            <SocialIcons icon='google' />
                        </Button>
                        <Button variant='icon'>
                            <SocialIcons icon='discord' />
                        </Button>
                    </CardGroup>
                    <Label noLine noUpperCase color='platinum' >
                        Checkboxex with Icons
                    </Label>
                    <CardGroup>
                        <InlineCheckbox type='button'
                            label='Unranked'
                            icon={<RankIcon icon='unranked' />}
                        />
                        <InlineCheckbox type='button'
                            label='Iron'
                            icon={<RankIcon icon='iron' />}
                        />
                        <InlineCheckbox type='button'
                            label='Bronze'
                            icon={<RankIcon icon='bronze' />}
                        />
                    </CardGroup>
                    <Label noLine noUpperCase >
                        Price
                    </Label>
                    <Slider max={1000} min={5} value={[10, 500]} disableSwap
                        marks={[{ value: 5, label: 5 }, { value: 1000, label: 1000 }]}
                        valueLabelDisplay='off'
                        customStyles={[ 'medium', 'cooper-light' ]}
                    />
                </Card>
                <Card>
                    <ButtonsGroup>
                        <Button startIcon={'?'}>
                            Beginning
                        </Button>
                        <Button variant={'secondary'} startIcon={'?'} color='black'>
                            BOOSTING RELATED
                        </Button>
                        <Button variant={'secondary'} startIcon={'?'} color='black'>
                            PAYMENT RELATED
                        </Button>
                    </ButtonsGroup>
                    <Accordion
                        header={'Which regions and platforms do we serve?'}
                        children={
                            <Typography color={'cooper-light'} fontSize='14px'>
                                Our services are available worldwide and <br /> on all platforms
                                (PC/XBOX/PS4/ MOBILE/ NINTENDO)
                            </Typography>
                        }
                    />
                </Card>
                <div>
                    <Typography component={'p'} color={'platinum'} fontSize={'32px'}>
                        Component p font-size 32px
                    </Typography>
                    <Typography component={'h1'}>Component h1</Typography>
                    <Typography component={'h2'}>Component h2</Typography>
                    <Typography component={'h3'}>Component h3</Typography>
                    <Typography component={'a'} color={'platinum'} href={'#'}>
                        Component a
                    </Typography>
                    <Typography component={'p'} color={'green'}>
                        Component p green
                    </Typography>
                    <Typography component={'p'} color={'red'}>
                        Component p red
                    </Typography>
                    <Typography component={'p'} color={'cooper'}>
                        Component p cooper
                    </Typography>
                    <Typography component={'p'} color={'cooper-light'}>
                        Component p cooper-light
                    </Typography>
                    <Typography component={'p'} color={'platinum-50'}>
                        Component p platinum 50
                    </Typography>
                    <Typography component={'p'} color={'platinum-15'}>
                        Component p platinum 15
                    </Typography>
                    <Typography component={'p'} color={'platinum-5'}>
                        Component p platinum 5
                    </Typography>
                    <Typography component={'p'} color={'platinum'} fontSize={'10px'}>
                        Component p font-size 10px
                    </Typography>
                </div>
            </div>
        </>
    );
};
