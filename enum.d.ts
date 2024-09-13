declare const enum sengo1_vision_e {
    //% block="Color"
    kVisionColor = 1,
    //% block="Blob"
    kVisionBlob = 2,
    //% block="Ball"
    kVisionBall = 3,
    //% block="Line"
    kVisionLine = 4,
    //% block="Card"
    kVisionCard = 6,
    //% block="Body"
    kVisionBody = 7,
    //% block="Face"
    kVisionFace = 8,
    //% block="QrCode"
    kVisionQrCode = 9,
    //% blockHidden=true
    kVisionMaxType
}

declare const enum sengo1_mode_e {
    //% block="SerialMode"
    //% blockHidden=true 
    kSerialMode = 0,
    //% block="I2CMode"
    kI2CMode = 1,
    //% blockHidden=true 
    kUnknownMode,
}

declare const enum card_label_e {
    //% block="Forward"
    kCardForward = 1,
    //% block="Left"
    kCardLeft = 2,
    //% block="Right"
    kCardRight = 3,
    //% block="TurnAround"
    kCardTurnAround = 4,
    //% block="Park"
    kCardPark = 5
}


declare const enum color_label_e {
    //% block="Black"
    kColorBlack = 1,
    //% block="White"
    kColorWhite = 2,
    //% block="Red"
    kColorRed = 3,
    //% block="Green"
    kColorGreen = 4,
    //% block="Blue"
    kColorBlue = 5,
    //% block="Yellow"
    kColorYellow = 6,
    //% block="Unkown"
    kColorUnkown = 7
}

declare const enum sengo1Status {
    //% block="enable"
    Enable = 1,
    //% block="disable"
    Disable = 0,
}

declare const enum sengo1_value_info_e {
    //% block="horizontal"
    kXValue = 1,
    //% block="vertical"
    kYValue,
    //% block="width"
    kWidthValue,
    //% block="height"
    kHeightValue,
    //% block="label"
    kLabel
}

declare const enum sengo1_Line_info_e {
    //% block="X coordinate of end point"
    kXValue = 1,
    //% block="Y coordinate of end point"
    kYValue,
    //% block="X coordinate of starting point"
    kWidthValue,
    //% block="Y coordinate of starting point"
    kHeightValue,
    //% block="inclination angle"
    kLabel
}

declare const enum sengo1_qr_info_e {
    //% block="horizontal"
    kXValue = 1,
    //% block="vertical"
    kYValue,
    //% block="width"
    kWidthValue,
    //% block="height"
    kHeightValue
}

declare const enum sengo1_color_info_e {
    //% block="red channel"
    kRValue = 6,
    //% block="green channel"
    kGValue = 7,
    //% block="blue channel"
    kBValue = 8,
    //% block="label"
    kLabel = 5
}

declare const enum sengo1_addr_e {
    //% block="0x60"
    ADDR1 = 0x60,
}
