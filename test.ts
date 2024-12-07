function testVisionColor() {
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionColor)
    Sengo1VisionSensor.setColorParam(50, 40, 8, 4)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionColor) > 0) {
            serial.writeValue("l", Sengo1VisionSensor.colorRgbValue(sentry_color_info_e.kLabel))
            serial.writeValue("r", Sengo1VisionSensor.colorRgbValue(sentry_color_info_e.kRValue))
            serial.writeValue("g", Sengo1VisionSensor.colorRgbValue(sentry_color_info_e.kRValue))
            serial.writeValue("b", Sengo1VisionSensor.colorRgbValue(sentry_color_info_e.kBValue))
            if (Sengo1VisionSensor.detectedColor(color_label_e.kColorRed)) {
                serial.writeLine("Red")
            }
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Disable, sentry_vision_e.kVisionColor)
            break;
        }
    }
}
function testVisionBody() {
    Sengo1VisionSensor.ledSetColor(sentry_led_color_e.kLedPurple, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionBody)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionBody) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kLabel))
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Disable, sentry_vision_e.kVisionBody)
            break;
        }
    }
}
function testVisionCard() {
    Sengo1VisionSensor.ledSetColor(sentry_led_color_e.kLedPurple, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionCard)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionCard) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kLabel))
            if (Sengo1VisionSensor.detectedCard(card_label_e.kCardForward)) {
                serial.writeLine("Forward")
            }
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Disable, sentry_vision_e.kVisionCard)
            break;
        }
    }
}
function testVisionFace() {
    Sengo1VisionSensor.ledSetColor(sentry_led_color_e.kLedPurple, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionFace)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionFace) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kLabel))
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Disable, sentry_vision_e.kVisionFace)
            break;
        }
    }
}
function testVisionBall() {
    Sengo1VisionSensor.ledSetColor(sentry_led_color_e.kLedCyan, sentry_led_color_e.kLedBlue, 1)
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionBall)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionBall) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kLabel))
            if (Sengo1VisionSensor.detectedBall(ball_label_e.kBallTableTennis)) {
                serial.writeLine("TableTennis")
            }
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionBall)
            break;
        }
    }
}
function testVisionLine() {
    Sengo1VisionSensor.ledSetColor(sentry_led_color_e.kLedRed, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionLine)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionLine) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.lineValue(sentry_Line_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.lineValue(sentry_Line_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.lineValue(sentry_Line_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.lineValue(sentry_Line_info_e.kHeightValue))
            serial.writeValue("a", Sengo1VisionSensor.lineValue(sentry_Line_info_e.kLabel))
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Disable, sentry_vision_e.kVisionLine)
            break;
        }
    }
}
function testVisionQrCode() {
    Sengo1VisionSensor.ledSetColor(sentry_led_color_e.kLedWhite, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionQrCode)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionQrCode) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.qrCodeValue(sentry_qr_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.qrCodeValue(sentry_qr_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.qrCodeValue(sentry_qr_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.qrCodeValue(sentry_qr_info_e.kHeightValue))
            serial.writeString(Sengo1VisionSensor.qrCodeValueString())
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Disable, sentry_vision_e.kVisionQrCode)
            break;
        }
    }
}
function testVisionBlob() {
    Sengo1VisionSensor.ledSetColor(sentry_led_color_e.kLedBlue, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionBlob)
    Sengo1VisionSensor.setBlobParam(3, 4, color_label_e.kColorBlue)
    while (true) {
        if (Sengo1VisionSensor.visionDetectedNum(sentry_vision_e.kVisionBlob) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.visionValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kLabel))
            if (Sengo1VisionSensor.detectedBlob(color_label_e.kColorRed)) {
                serial.writeLine("Blue")
            }
            Sengo1VisionSensor.setVisionStatus(sengo1_status.Enable, sentry_vision_e.kVisionBlob)
            break;
        }
    }
}
Sengo1VisionSensor.begin(sentry_mode_e.kSerialMode, sengo1_addr_e.ADDR1)
basic.forever(function () {
    testVisionColor()
    testVisionBlob()
    testVisionBall()
    testVisionLine()
    testVisionBody()
    testVisionFace()
    testVisionCard()
    testVisionQrCode()
})
