import React, { useState, useLayoutEffect } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss'
import { BlockHeader } from 'app/components/common/BlockHader';
import { Accordion, Button, ButtonsGroup, Typography } from 'shared/ui';
import { inViewportListener } from 'utils/window';
import { AnswerStep } from './components/AnswerStep';

const mocks = {
    sections: [
        {
            name: 'Beginning',
            sysname: 'beginning'
        },
        {
            name: 'BOOSTING RELATED',
            sysname: 'boosting'
        },
        {
            name: 'PAYMENT RELATED',
            sysname: 'payment'
        },
    ],
    faqs: {
        beginning: [
            {
                question: 'What is BuyCarry.pro ?',
                answer: 'Our services are available worldwide and on all platforms (PC/XBOX/PS4/ MOBILE/ NINTENDO)'
            },
            {
                question: 'Why can we be trusted ?',
                answer: 'Our services are available worldwide and on all platforms (PC/XBOX/PS4/ MOBILE/ NINTENDO)'
            },
            {
                question: 'Which regions and platforms do we serve ?',
                answer: 'Our services are available worldwide and on all platforms (PC/XBOX/PS4/ MOBILE/ NINTENDO)'
            },
        ],
        boosting: [
            {
                question: 'How does it work ?',
                answer: 'The approximate waiting time depends on the region and the game. You start the promotion within 15 minutes after payment of the order .'
            },
            {
                question: 'Will my account be safe ?',
                answer: 'The approximate waiting time depends on the region and the game. You start the promotion within 15 minutes after payment of the order .'
            },
            {
                question: 'Can I play with booster ?',
                answer: 'The approximate waiting time depends on the region and the game. You start the promotion within 15 minutes after payment of the order .'
            },
            {
                question: 'How can I monitor the fulfillment of my order ?',
                answer: 'The approximate waiting time depends on the region and the game. You start the promotion within 15 minutes after payment of the order .'
            },
            {
                question: 'After what time, after payment, will you start my order ?',
                answer: 'The approximate waiting time depends on the region and the game. You start the promotion within 15 minutes after payment of the order .'
            },
            {
                question: 'Can I choose a specific booster ?',
                answer: 'The approximate waiting time depends on the region and the game. You start the promotion within 15 minutes after payment of the order .'
            },
        ],
        payment: [
            {
                question: 'What payment methods are available on the platform ?',
                answer: 'What payment methods are available on the platform'
            },
            {
                question: 'Will my financial information be safe ?',
                answer: 'Will my financial information be safe'
            },
            {
                question: 'How can I pay for my order ?',
                answerSteps: [
                    {
                        icon: 'click',
                        text: 'Select the desired game'
                    },
                    {
                        icon: 'cartBig2',
                        text: 'Select the desired service and add it to the cart'
                    },
                    {
                        icon: 'visa',
                        text: 'Choose a payment method'
                    },
                    {
                        icon: 'talk',
                        text: 'After payment, go to the chat with the booster'
                    },
                    {
                        icon: 'eye',
                        text: 'Follow the execution of the order'
                    },
                ]
            },
        ]
    }
}

interface IProps {
    
}

const boxClass = 'faq-box';

export const Faq: React.FC<IProps> = (props) => {
    const {} = props;
    const [ section, setSection ] = useState<string>('beginning');
    const [ isVisible, setIsVisible ] = useState<boolean>(false);

    useLayoutEffect(() => {
        inViewportListener({
            setIsVisible,
            boxClass
        });
    });

    const classMain = classNames([
        styles.container,
        boxClass,
        isVisible && 'animate__animated animate__fadeInUp'
    ]);

    return (
        <div className={classMain}>

            <div className={styles.header}>
                <BlockHeader>Frequently asked questions</BlockHeader>
            </div>

            <div className={styles.buttons}>
                {mocks.sections.map((item, index) => {
                    const color = item.sysname === section ? 'classic' : 'black';
                    const variant = item.sysname === section ? 'contained' : 'secondary';

                    return (
                        <Button startIcon={'?'} variant={variant} color={color} key={index}
                            onClick={() => setSection(item.sysname)}
                        >
                            {item.name}
                        </Button>
                    )
                })}
            </div>

            <div className={styles.faqlist}>
                {Object.keys(mocks.faqs).map(sec => 
                    <div className={classNames([
                        styles.wrapper,
                        sec != section && styles.hidden
                    ])}>
                        {mocks.faqs[sec]?.map((item, index) => 
                            <Accordion header={item.question} key={index} index={`${index}${section}`}>
                                {item.answer &&
                                    <Typography color={'cooper-light'} fontSize='14px'>
                                        {item.answer}
                                    </Typography>
                                }
                                {item.answerSteps && 
                                    <div className={styles.answerSteps}>
                                        {item.answerSteps?.map((item, index) => (
                                            <AnswerStep icon={item.icon} key={index}>
                                                {item.text}
                                            </AnswerStep>
                                        ))}
                                    </div> 
                                }
                            </Accordion>
                        )}
                    </div>
                )}
            </div>

        </div>
    )
}