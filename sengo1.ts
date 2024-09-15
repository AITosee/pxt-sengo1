declare const enum sentry_vision_e_1
{
//% block="Color"
//% blockHidden=true
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
//% block="QrCode"
//% blockHidden=true
kVisionQrCode = 9,
//% blockHidden=true
kVisionMaxType = 10,
}

declare const enum sentry_led_color_e {
  //% block="off"
  kLedClose = 0,
  //% block="Red"
  kLedRed = 1,
  //% block="Green"
  kLedGreen = 2,
  //% block="Yellow"
  kLedYellow = 3,
  //% block="Blue"
  kLedBlue = 4,
  //% block="Purple"
  kLedPurple = 5,
  //% block="Cyan"
  kLedCyan = 6,
  //% block="White"
  kLedWhite = 7,
}

declare const enum sentry_mode_e {
  //% block="Serial"
  kSerialMode = 0,
  //% block="I2C"
  kI2CMode = 1,
  //% blockHidden=true
  kUnknownMode,
}

declare const enum sengo1_status {
  //% block="run"
  Enable = 1,
  //% block="stop"
  Disable = 0,
}

declare const enum sentry_obj_info_e {
  //% block="status"
  //% blockHidden=true
  kStatus = 0,
  //% block="x-cood"
  kXValue = 1,
  //% block="y-cood"
  kYValue = 2,
  //% block="width"
  kWidthValue = 3,
  //% block="height"
  kHeightValue = 4,
  //% block="label"
  kLabel = 5,
  //% block="red CH value"
  //% blockHidden=true
  kRValue = 6,
  //% block="green CH value"
  //% blockHidden=true
  kGValue = 7,
  //% block="blue CH value"
  //% blockHidden=true
  kBValue = 8,
}

declare const enum sentry_color_info_e {
  //% block="label"
  kLabel = 5,
  //% block="red CH value"
  kRValue = 6,
  //% block="green CH value"
  kGValue = 7,
  //% block="blue CH value"
  kBValue = 8,
}

declare const enum sentry_Line_info_e {
  //% block="x-cood of ending point"
  kXValue = 1,
  //% block="y-cood of ending point"
  kYValue,
  //% block="x-cood of starting point"
  kWidthValue,
  //% block="y-cood of starting point"
  kHeightValue,
  //% block="inclination angle"
  kLabel,
}

declare const enum sentry_qr_info_e {
  //% block="x-cood"
  kXValue = 1,
  //% block="y-cood"
  kYValue,
  //% block="width"
  kWidthValue,
  //% block="height"
  kHeightValue,
}

declare const enum sengo1_addr_e {
  //% block="0x60"
  ADDR1 = 0x60,
}

//% color="#ff6600" width=20 icon="\uf085"
namespace Sengo1 {
  const SENGO1_OK = 0x00;

  //% shim=tosee_sentry::sengo1_Begin
  function sengo1_Begin(mode: number, addr: number): number {
    console.log("sengo1_Begin " + addr.toString());
    return 0;
  }

  //% shim=tosee_sentry::sengo1_LedSetColor
  function sengo1_LedSetColor(
    detected_color: number,
    undetected_color: number,
    leval: number
  ): number {
    console.log("sengo1_LedSetColor " + detected_color.toString());
    return 0;
  }

  //% shim=tosee_sentry::sengo1_SetParamNum
  function sengo1_SetParamNum(vision_type: number, max_num: number): number {
    console.log("sengo1_SetParamNum " + vision_type.toString());
    return 0;
  }

  //% shim=tosee_sentry::sengo1_SetParam
  function sengo1_SetParam(
    vision_type: number,
    param: Buffer,
    param_id: number = 1
  ): number {
    console.log("sengo1_SetParam " + param.toHex());
    return 0;
  }

  //% shim=tosee_sentry::sengo1_VisionSetStatus
  function sengo1_VisionSetStatus(status: number, vision_type: number): number {
    console.log("sengo1_VisionSetStatus " + vision_type.toString());
    return 0;
  }

  //% shim=tosee_sentry::sengo1_GetValue
  function sengo1_GetValue(
    vision_type: number,
    object_info: number = 0,
    obj_id: number = 1
  ): number {
    console.log("sengo1_GetValue " + vision_type.toString());
    return 0;
  }

  //% shim=tosee_sentry::sengo1_GetQrCodeValue
  function sengo1_GetQrCodeValue(): string {
    console.log("sengo1_GetQrCodeValue ");
    return "";
  }

  /**
   * Begin Sengo1.
   */
  //% blockId=Sengo1_begin block=" Initialize  Sengo1  port %mode |addr%addr "
  //% mode.defl=sentry_mode_e.kI2CMode
  //% group="Settings Blocks"
  //% weight=100
  export function Begin(mode: sentry_mode_e, addr: sengo1_addr_e) {
    while (sengo1_Begin(mode, addr) != SENGO1_OK);
  }

  /**
   * Sengo1 vision enable set.
   */
  //% blockId=Sengo1_vision_Set block=" Set  Sengo1  %enable| algo%vision_type "
  //% group="Settings Blocks"
  //% weight=98
  export function VisionSetStatus(
    status: sengo1_status,
    vision_type: sentry_vision_e
  ) {
    while (sengo1_VisionSetStatus(vision_type, status) != SENGO1_OK);
  }

  /**
   * set led color.
   * @param id Sengo1 id
   * @param led led type.
   * @param detected_color led color while sensor detected target.
   * @param undetected_color led color while sensor undetected target.
   */
  //% blockId=Sengo1_led_set_color block=" Set  Sengo1  LEDs' color %detected_color|when targets were detected otherwise %undetected_color luma(1-15) %leval "
  //% detected_color.defl=sentry_led_color_e.kLedBlue
  //% undetected_color.defl=sentry_led_color_e.kLedRed
  //% leval.min=0 leval.max=15 leval.defl=1
  //% width=200 inlineInputMode=inline
  //% group="Settings Blocks"
  //% weight=99
  export function LedSetColor(
    detected_color: sentry_led_color_e,
    undetected_color: sentry_led_color_e,
    leval: number = 1
  ) {
    while (
      sengo1_LedSetColor(detected_color, undetected_color, leval) != SENGO1_OK
    );
  }

  /**
   * set vision prama number.
   * @param vision_type: vision type.
   * @param max_num max prama number.
   */
  //% blockId=Sengo1_vision_SetParamNum block=" Set  Sengo1  algo%vision_type|  max number %max_num "
  //% max_num.min=1 max_num.max=25 max_num.defl=1
  //% group="Settings Blocks"
  //% blockHidden=true
  //% weight=97
  export function SetParamNum(vision_type: sentry_vision_e, max_num: number) {
    while (sengo1_SetParamNum(vision_type, max_num) != SENGO1_OK);
  }

  /**
   * color prama.
   * @param x ROI centre x.
   * @param y ROI centre y.
   * @param w ROI width.
   * @param h ROI height.
   */
  //% blockId=Sengo1_vision_color_param block=" Set  Sengo1  algo Color  x-cood%x| y-cood%y| width%w| height%h"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% x.defl=50
  //% y.defl=50
  //% w.defl=3
  //% h.defl=4
  //% inlineInputMode=inline
  //% group="Settings Blocks"
  //% weight=96
  export function SetColorParam(
    x: number,
    y: number,
    w: number,
    h: number,
    obj_id: number = 1
  ) {
    let prama = pins.createBuffer(10);
    prama.setNumber(NumberFormat.UInt16BE, 0, x);
    prama.setNumber(NumberFormat.UInt16BE, 2, y);
    prama.setNumber(NumberFormat.UInt16BE, 4, w);
    prama.setNumber(NumberFormat.UInt16BE, 6, h);

    while (
      sengo1_SetParam(sentry_vision_e.kVisionColor, prama, obj_id) != SENGO1_OK
    );
  }

  /**
   * blod prama.
   * @param w detecte min width.
   * @param h detecte min height.
   * @param l detecte lable.
   */
  //% blockId=Sengo1_vision_blob_param block=" Set  Sengo1  algo Blob  min-width%w| min-height%h| lable%l"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% w.defl=3
  //% h.defl=4
  //% l.defl=color_label_e.kColorRed
  //% inlineInputMode=inline
  //% group="Settings Blocks"
  //% weight=95
  export function SetBlobParam(
    w: number,
    h: number,
    l: color_label_e,
    obj_id: number = 1
  ) {
    let prama = pins.createBuffer(10);

    prama.setNumber(NumberFormat.UInt16BE, 4, w);
    prama.setNumber(NumberFormat.UInt16BE, 6, h);
    prama.setNumber(NumberFormat.UInt16BE, 8, l);

    while (
      sengo1_SetParam(sentry_vision_e.kVisionBlob, prama, obj_id) != SENGO1_OK
    );
  }

  /**
   * Get vision detected number
   * @param type vision type
   */
  //% blockId=Sengo_detected block="  Sengo1  algo%vision_type  num of results" color="#2E8B57"
  //% group="Operation Blocks" advanced=false
  //% weight=94
  export function Detected(vision_type: sentry_vision_e): number {
    return sengo1_GetValue(<number>vision_type);
  }

  /**
   * Get the result of vision color recognition.
   * @param object_info Paramters type
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_get_color_value block="  Sengo1  algo Color|  %object_info of results" color="#2E8B57"
  //% inlineInputMode=inline
  //% expandableArgumentMode="enabled"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% object_info.defl=5
  //% group="Operation Blocks"
  //% weight=93
  export function ColorRcgValue(
    object_info: sentry_color_info_e,
    obj_id: number = 1
  ): number {
    return GetValue(<number>sentry_vision_e.kVisionColor, <number>object_info, obj_id);
  }

  /**
   * get vision sengo1_object_t data, this function will update vision sengo1_object_t automatically.
   * @param vision_type: vision type.
   * @param object_info:  object information
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_get_value block="  Sengo1  algo%vision_type|  %object_info of results" color="#2E8B57"
  //% inlineInputMode=inline
  //% expandableArgumentMode="enabled"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=92
  export function GetValue(
    vision_type: sentry_vision_e_1,
    object_info: sentry_obj_info_e,
    obj_id: number = 1
  ): number {
    return sengo1_GetValue(<number>vision_type, <number>object_info, obj_id);
  }

  /**
   * Get the result of vision Line value.
   * @param object_info Paramters type
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_get_Line_value block="  Sengo1  algo Line|  %object_info of results" color="#2E8B57"
  //% inlineInputMode=inline
  //% expandableArgumentMode="enabled"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=91
  export function LineValue(
    object_info: sentry_Line_info_e,
    obj_id: number = 1
  ): number {
    return GetValue(<number>sentry_vision_e.kVisionLine, <number>object_info, obj_id);
  }

    /**
   * Get the result of vision qr value.
   * @param object_info Paramters type
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_get_qr_value block="  Sengo1  algo QrCode|  %object_info of results" color="#2E8B57"
  //% inlineInputMode=inline
  //% expandableArgumentMode="enabled"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=90
  export function QrcodeValue(
    object_info: sentry_qr_info_e,
    obj_id: number = 1
  ): number {
    return GetValue(<number>sentry_vision_e.kVisionLine, <number>object_info, obj_id);
  }

      /**
   * Get the result of vision Qr value string.
   */
  //% blockId=Sengo1_get_Qrcode_value_string block="  Sengo1  algo QrCode  string  of detected results" color="#2E8B57"
  //% inlineInputMode=inline
  //% expandableArgumentMode="enabled"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=89
  export function QrcodeValueString( ): string {
    return sengo1_GetQrCodeValue();
  }

  /**
   * Detected Color
   * @param lable Color lable
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_detected_color block=" Sengo1  algo Color  recognized %lable of results" color="#2E8B57"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=88
  export function DetectedColor(
    lable: color_label_e,
    obj_id: number = 1
  ): boolean {
    return (
      GetValue(
        sentry_vision_e_1.kVisionColor,
        sentry_obj_info_e.kLabel,
        obj_id
      ) == lable
    );
  }

  /**
   * Detected Blob
   * @param lable Blob lable
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_detected_blob block=" Sengo1  algo Blob  detected %lable blob" color="#2E8B57"
  //% lable.defl=color_label_e.kColorRed
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=87
  export function DetectedBlob(
    lable: color_label_e,
    obj_id: number = 1
  ): boolean {
    return (
      GetValue(sentry_vision_e_1.kVisionBlob, sentry_obj_info_e.kLabel, obj_id) ==
      lable
    );
  }

  /**
   * Detected Card
   * @param lable Card lable
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_detected_card block=" Sengo1  algo Card  recognized %lable" color="#2E8B57"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=86
  export function DetectedCard(
    lable: card_label_e,
    obj_id: number = 1
  ): boolean {
    return (
      GetValue(sentry_vision_e_1.kVisionCard, sentry_obj_info_e.kLabel, obj_id) ==
      lable
    );
  }
  /**
   * Detected Ball
   * @param lable Ball lable
   * @param obj_id:  object index
   */
  //% blockId=Sengo1_detected_ball block=" Sengo1  algo Ball  recognized %lable" color="#2E8B57"
  //% obj_id.min=1 obj_id.max=25 obj_id.defl=1
  //% group="Operation Blocks"
  //% weight=85
  export function DetectedBall(
    lable: ball_label_e,
    obj_id: number = 1
  ): boolean {
    return (
      GetValue(sentry_vision_e_1.kVisionBall, sentry_obj_info_e.kLabel, obj_id) ==
      lable
    );
  }
}
