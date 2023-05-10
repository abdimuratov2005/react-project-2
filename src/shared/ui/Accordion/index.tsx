import {
    AccordionDetails,
    AccordionProps as MuiAccordionProps,
    AccordionSummary,
    Accordion as MuiAccordion,
} from '@mui/material';
import { Typography } from '../Typography';
import classes from './Accordion.module.scss';
import { Arrow } from '../../assets/icons/arrow.js';
import { Question } from '../../assets/icons/question.js';
import { v4 as uuidv4 } from 'uuid';

interface AccordionProps extends Omit<MuiAccordionProps, 'onError'> {
    header: string;
    children: string | React.ReactNode;
    headerIcon?: 'question';
    index?: string;
}

export const Accordion = (props: AccordionProps) => {
    const { header, children, headerIcon = 'question', index = '1a' } = props;
    const uuid = uuidv4();

    const getHeaderIcon = () => {
        if (headerIcon == 'question') {
            return (
                <div className={classes.headerIcon}>
                    <Question />
                </div>
            );
        }
    };
    return (
        <>
            <MuiAccordion className={classes.root}>
                <AccordionSummary
                    aria-controls={`panel${index}-content`}
                    id={`panel${index}-header`}
                    expandIcon={<Arrow fill='#666666' />}
                >
                    {getHeaderIcon()}
                    <Typography component={'p'} fontSize='16px' fontWeight='700'>
                        {header}
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>{children}</AccordionDetails>
            </MuiAccordion>
        </>
    );
};
