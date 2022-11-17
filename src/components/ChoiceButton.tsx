import React from "react";

interface Props {
    border: string;
    rejectColor: string;
    acceptColor: string;
    height: string;
    onAccept: () => void;
    onReject: () => void;
    acceptText: string;
    rejectText: string;
    radius: string
    width: string;
    acceptBackgroundColor: string;
    rejectBackgroundColor: string;
    padding: string;
    outline: string;
}

const ChoiceButton: React.FC<Props> = ({
    border,
    rejectColor,
    acceptColor,
    height,
    onAccept,
    onReject,
    acceptText,
    rejectText,
    radius,
    width,
    acceptBackgroundColor,
    rejectBackgroundColor,
    padding,
    outline,
}) => {
    return (
        <>
            <button
                onClick={onAccept}
                style={{
                    backgroundColor: acceptBackgroundColor,
                    border,
                    borderRadius: radius,
                    height,
                    width,
                    padding,
                    outline,
                    color: acceptColor
                }}
            >
                {acceptText}
            </button>
            <button
                onClick={onReject}
                style={{
                    backgroundColor: rejectBackgroundColor,
                    border,
                    borderRadius: radius,
                    height,
                    width,
                    padding,
                    outline,
                    color: rejectColor
                }}
            >
                {rejectText}
            </button>
        </>



    );
}

export default ChoiceButton;