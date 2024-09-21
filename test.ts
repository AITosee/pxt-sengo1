function 颜色识别() {
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionColor)
    Sengo1VisionSensor.SetColorParam(50, 40, 8, 4)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionColor) > 0) {
            serial.writeValue("l", Sengo1VisionSensor.ColorRcgValue(sentry_color_info_e.kLabel))
            serial.writeValue("r", Sengo1VisionSensor.ColorRcgValue(sentry_color_info_e.kRValue))
            serial.writeValue("g", Sengo1VisionSensor.ColorRcgValue(sentry_color_info_e.kRValue))
            serial.writeValue("b", Sengo1VisionSensor.ColorRcgValue(sentry_color_info_e.kBValue))
            if (Sengo1VisionSensor.DetectedColor(color_label_e.kColorRed)) {
                serial.writeLine("Red")
            }
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Disable, sentry_vision_e.kVisionColor)
            break;
        }
    }
}
function 色块检测() {
    Sengo1VisionSensor.LedSetColor(sentry_led_color_e.kLedBlue, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionBlob)
    Sengo1VisionSensor.SetBlobParam(3, 4, color_label_e.kColorBlue)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionBlob) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kLabel))
            if (Sengo1VisionSensor.DetectedBlob(color_label_e.kColorRed)) {
                serial.writeLine("Blue")
            }
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionBlob)
            break;
        }
    }
}
function 人脸识别() {
    Sengo1VisionSensor.LedSetColor(sentry_led_color_e.kLedPurple, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionFace)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionFace) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionFace, sentry_obj_info_e.kLabel))
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Disable, sentry_vision_e.kVisionFace)
            break;
        }
    }
}
function 线条检测() {
    Sengo1VisionSensor.LedSetColor(sentry_led_color_e.kLedRed, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionLine)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionLine) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.LineValue(sentry_Line_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.LineValue(sentry_Line_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.LineValue(sentry_Line_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.LineValue(sentry_Line_info_e.kHeightValue))
            serial.writeValue("a", Sengo1VisionSensor.LineValue(sentry_Line_info_e.kLabel))
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Disable, sentry_vision_e.kVisionLine)
            break;
        }
    }
}
function 卡片识别() {
    Sengo1VisionSensor.LedSetColor(sentry_led_color_e.kLedPurple, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionCard)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionCard) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kLabel))
            if (Sengo1VisionSensor.DetectedCard(card_label_e.kCardForward)) {
                serial.writeLine("Forward")
            }
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Disable, sentry_vision_e.kVisionCard)
            break;
        }
    }
}
function 球体识别() {
    Sengo1VisionSensor.LedSetColor(sentry_led_color_e.kLedCyan, sentry_led_color_e.kLedBlue, 1)
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionBall)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionBall) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kLabel))
            if (Sengo1VisionSensor.DetectedBall(ball_label_e.kBallTableTennis)) {
                serial.writeLine("TableTennis")
            }
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionBall)
            break;
        }
    }
}
function 二维码() {
    Sengo1VisionSensor.LedSetColor(sentry_led_color_e.kLedWhite, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionQrCode)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionQrCode) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.QrcodeValue(sentry_qr_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.QrcodeValue(sentry_qr_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.QrcodeValue(sentry_qr_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.QrcodeValue(sentry_qr_info_e.kHeightValue))
            serial.writeString(Sengo1VisionSensor.QrcodeValueString())
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Disable, sentry_vision_e.kVisionQrCode)
            break;
        }
    }
}
function 人体检测() {
    Sengo1VisionSensor.LedSetColor(sentry_led_color_e.kLedPurple, sentry_led_color_e.kLedYellow, 1)
    Sengo1VisionSensor.VisionSetStatus(sengo1_status.Enable, sentry_vision_e.kVisionBody)
    while (true) {
        if (Sengo1VisionSensor.Detected(sentry_vision_e.kVisionBody) > 0) {
            serial.writeValue("x", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kXValue))
            serial.writeValue("y", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kYValue))
            serial.writeValue("w", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kWidthValue))
            serial.writeValue("h", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kXValue))
            serial.writeValue("l", Sengo1VisionSensor.GetValue(sentry_vision_e_1.kVisionBody, sentry_obj_info_e.kLabel))
            Sengo1VisionSensor.VisionSetStatus(sengo1_status.Disable, sentry_vision_e.kVisionBody)
            break;
        }
    }
}
Sengo1VisionSensor.Begin(sentry_mode_e.kI2CMode, sengo1_addr_e.ADDR1)
basic.forever(function () {
    颜色识别()
    色块检测()
    球体识别()
    线条检测()
    人体检测()
    人脸识别()
    卡片识别()
    二维码()
})
