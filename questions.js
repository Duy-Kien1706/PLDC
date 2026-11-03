const QUIZ_DATA = [
  // ==========================================
  // BỘ ĐỀ 1 (50 CÂU - GIAO DIỆN XANH - 7 PHẦN)
  // ==========================================
  {
    id: 101,
    set: 1,
    number: 1,
    section: "Phần 1",
    question: "Pháp luật đại cương nghiên cứu về vấn đề gì?",
    options: [
      "Chính trị",
      "Nhà nước",
      "Kinh tế",
      "Pháp luật và nhà nước"
    ],
    correctIndex: 3,
    explanation: "Môn học Pháp luật đại cương nghiên cứu những vấn đề cơ bản nhất về Nhà nước và Pháp luật.",
    images: ["1792837436282_4639516480418908006_g5653112479445915767_eccfd80ee9748ee670547080f4b54a15.jpg"]
  },
  {
    id: 102,
    set: 1,
    number: 2,
    section: "Phần 1",
    question: "Trong lịch sử có các hình thức nhà nước nào tồn tại?",
    options: [
      "Chủ nô, phong kiến, tư sản",
      "Quân chủ, cộng hòa",
      "Cổ đại, trung đại, hiện đại",
      "Chủ nô, phong kiến, tư bản, xã hội chủ nghĩa"
    ],
    correctIndex: 3,
    explanation: "Đáp án đúng theo đề là 4 kiểu/hình thức nhà nước trong lịch sử: Chủ nô, phong kiến, tư bản, xã hội chủ nghĩa (2/2 điểm trong ảnh gốc).",
    images: ["1792837436282_4639516480418908006_g5653112479445915767_eccfd80ee9748ee670547080f4b54a15.jpg"]
  },
  {
    id: 103,
    set: 1,
    number: 3,
    section: "Phần 1",
    question: "Kiểu nhà nước nào có giai cấp thống trị chiếm đa số trong xã hội?",
    options: [
      "Chủ nô",
      "Phong kiến",
      "Tư bản",
      "Xã hội chủ nghĩa"
    ],
    correctIndex: 3,
    explanation: "Nhà nước xã hội chủ nghĩa là nhà nước mà giai cấp thống trị (giai cấp công nhân và nhân dân lao động) chiếm đại đa số trong xã hội.",
    images: ["1792837436282_4639516480418908006_g5653112479445915767_eccfd80ee9748ee670547080f4b54a15.jpg"]
  },
  {
    id: 104,
    set: 1,
    number: 4,
    section: "Phần 1",
    question: "Hình thức Nhà nước Cộng hòa Xã hội chủ nghĩa Việt Nam là:",
    options: [
      "A. Cộng hòa tổng thống",
      "B. Cộng hòa đại nghị",
      "C. Cộng hòa lưỡng tính",
      "D. Quân chủ lập hiến"
    ],
    correctIndex: 1,
    explanation: "Trong đáp án của đề (2/2 điểm), hình thức chính thể của Nhà nước CHXHCN Việt Nam được xếp vào nhóm B. Cộng hòa đại nghị (Quốc hội do dân bầu ra là cơ quan quyền lực nhà nước cao nhất).",
    images: ["1792837436282_4639516480418908006_g5653112479445915767_eccfd80ee9748ee670547080f4b54a15.jpg"]
  },
  {
    id: 105,
    set: 1,
    number: 5,
    section: "Phần 1",
    question: "Các kiểu nhà nước trong lịch sử có điểm gì giống nhau?",
    options: [
      "Đều có Đảng lãnh đạo",
      "Đều dựa trên cơ sở chế độ tư hữu",
      "Đều dựa trên cơ sở chế độ công hữu",
      "Đều mang tính giai cấp và tính xã hội"
    ],
    correctIndex: 3,
    explanation: "Bản chất chung của mọi kiểu nhà nước trong lịch sử là đều mang tính giai cấp và tính xã hội.",
    images: ["1792837436337_4639516480418908006_g5653112479445915767_afb426219ba44fccea8368a0e92b0824.jpg"]
  },
  {
    id: 106,
    set: 1,
    number: 6,
    section: "Phần 2",
    question: "Nhà nước do giai cấp thống trị lập nên để bảo vệ quyền và lợi ích của giai cấp mình là quan điểm của học thuyết",
    options: [
      "Mác – Lênin",
      "Thần học",
      "Gia trưởng",
      "Khế ước xã hội"
    ],
    correctIndex: 0,
    explanation: "Theo học thuyết Mác – Lênin, nhà nước là sản phẩm và biểu hiện của những mâu thuẫn giai cấp không thể điều hòa được, do giai cấp thống trị lập nên để bảo vệ quyền và lợi ích của giai cấp mình.",
    images: ["1792837436337_4639516480418908006_g5653112479445915767_afb426219ba44fccea8368a0e92b0824.jpg"]
  },
  {
    id: 107,
    set: 1,
    number: 7,
    section: "Phần 2",
    question: "Tổ chức nào có quyền lực công?",
    options: [
      "Đoàn Thanh niên Cộng sản Hồ Chí Minh",
      "Công ty",
      "Nhà nước",
      "Các tổ chức xã hội"
    ],
    correctIndex: 2,
    explanation: "Quyền lực công cộng đặc biệt (quyền lực công) là một trong những đặc trưng cơ bản chỉ có ở Nhà nước.",
    images: ["1792837436337_4639516480418908006_g5653112479445915767_afb426219ba44fccea8368a0e92b0824.jpg"]
  },
  {
    id: 108,
    set: 1,
    number: 8,
    section: "Phần 2",
    question: "Có bao nhiêu kiểu nhà nước đã xuất hiện trong lịch sử?",
    options: [
      "3 kiểu",
      "4 kiểu",
      "5 kiểu",
      "6 kiểu"
    ],
    correctIndex: 1,
    explanation: "Trong lịch sử đã xuất hiện 4 kiểu nhà nước: Chủ nô, Phong kiến, Tư sản (Tư bản) và Xã hội chủ nghĩa.",
    images: ["1792837436337_4639516480418908006_g5653112479445915767_afb426219ba44fccea8368a0e92b0824.jpg"]
  },
  {
    id: 109,
    set: 1,
    number: 9,
    section: "Phần 2",
    question: "Hoạt động nào KHÔNG thuộc chức năng đối ngoại của nhà nước?",
    options: [
      "A. Thiết lập mối quan hệ với các tổ chức quốc tế",
      "B. Xây dựng hệ thống đường liên tỉnh với nguồn vốn tự có",
      "C. Chống kẻ thù xâm lược",
      "D. Thiết lập quan hệ đối với các quốc gia trên thế giới"
    ],
    correctIndex: 1,
    explanation: "Xây dựng hệ thống đường liên tỉnh với nguồn vốn tự có là hoạt động kinh tế - xã hội trong nước, thuộc chức năng đối nội của nhà nước.",
    images: ["1792837436357_4639516480418908006_g5653112479445915767_7124fff2e52c831204874ae9f3b80da7.jpg"]
  },
  {
    id: 110,
    set: 1,
    number: 10,
    section: "Phần 2",
    question: "Nhà nước Cộng hòa xã hội chủ nghĩa Việt Nam là nhà nước:",
    options: [
      "Có hai hệ thống cơ quan nhà nước",
      "Có nhiều hệ thống pháp luật áp dụng trên toàn lãnh thổ",
      "Có chủ quyền chung, toàn vẹn lãnh thổ",
      "Cả 3 đáp án trên đều đúng"
    ],
    correctIndex: 2,
    explanation: "Việt Nam là nhà nước đơn nhất, có chủ quyền chung, toàn vẹn lãnh thổ, một hệ thống cơ quan nhà nước và một hệ thống pháp luật thống nhất.",
    images: ["1792837436357_4639516480418908006_g5653112479445915767_7124fff2e52c831204874ae9f3b80da7.jpg"]
  },
  {
    id: 111,
    set: 1,
    number: 11,
    section: "Phần 3",
    question: "Hình thức cấu trúc của Nhà nước cộng hòa xã hội chủ nghĩa Việt Nam là:",
    options: [
      "A. Nhà nước liên bang",
      "B. Nhà nước đơn nhất",
      "C. Nhà nước liên minh",
      "Cả A và C đều đúng"
    ],
    correctIndex: 1,
    explanation: "Hình thức cấu trúc lãnh thổ của Nhà nước CHXHCN Việt Nam là Nhà nước đơn nhất.",
    images: ["1792837436357_4639516480418908006_g5653112479445915767_7124fff2e52c831204874ae9f3b80da7.jpg"]
  },
  {
    id: 112,
    set: 1,
    number: 12,
    section: "Phần 3",
    question: "Cơ quan quyền lực Nhà nước cao nhất của Nhà nước Việt Nam là",
    options: [
      "Chính phủ",
      "Quốc hội",
      "Đảng Cộng sản",
      "Tòa án"
    ],
    correctIndex: 1,
    explanation: "Theo Điều 69 Hiến pháp 2013, Quốc hội là cơ quan đại biểu cao nhất của Nhân dân, cơ quan quyền lực nhà nước cao nhất của nước CHXHCN Việt Nam.",
    images: [
      "1792837436357_4639516480418908006_g5653112479445915767_7124fff2e52c831204874ae9f3b80da7.jpg",
      "1792837436376_4639516480418908006_g5653112479445915767_1d78ef46b4b572aa318983317aef36e7.jpg"
    ]
  },
  {
    id: 113,
    set: 1,
    number: 13,
    section: "Phần 3",
    question: "Hình thức Pháp luật được áp dụng chủ yếu tại Việt Nam là:",
    options: [
      "Văn bản quy phạm pháp luật",
      "Tập quán pháp",
      "Tiền lệ pháp",
      "Học thuyết pháp luật"
    ],
    correctIndex: 0,
    explanation: "Tại Việt Nam, Văn bản quy phạm pháp luật là nguồn/hình thức pháp luật chủ yếu và quan trọng nhất.",
    images: ["1792837436376_4639516480418908006_g5653112479445915767_1d78ef46b4b572aa318983317aef36e7.jpg"]
  },
  {
    id: 114,
    set: 1,
    number: 14,
    section: "Phần 3",
    question: "Quy phạm nào mang tính quy phạm phổ biến?",
    options: [
      "Đạo đức",
      "Tập quán",
      "Pháp luật",
      "Cả 3 quy phạm trên"
    ],
    correctIndex: 2,
    explanation: "Tính quy phạm phổ biến (tính bắt buộc chung) là thuộc tính đặc trưng riêng có của Quy phạm pháp luật.",
    images: ["1792837436376_4639516480418908006_g5653112479445915767_1d78ef46b4b572aa318983317aef36e7.jpg"]
  },
  {
    id: 115,
    set: 1,
    number: 15,
    section: "Phần 3",
    question: "Văn bản nào dưới đây do Ủy ban thường vụ Quốc hội ban hành",
    options: [
      "Nghị định",
      "Thông tư",
      "Quyết định",
      "Pháp lệnh"
    ],
    correctIndex: 3,
    explanation: "Ủy ban thường vụ Quốc hội ban hành Pháp lệnh và Nghị quyết.",
    images: [
      "1792837436376_4639516480418908006_g5653112479445915767_1d78ef46b4b572aa318983317aef36e7.jpg",
      "1792837436395_4639516480418908006_g5653112479445915767_83d817ae650808e6798751f81ca5d86f.jpg"
    ]
  },
  {
    id: 116,
    set: 1,
    number: 16,
    section: "Phần 4",
    question: "Người mất năng lực hành vi là người",
    options: [
      "đang mắc bệnh tâm thần hoặc mắc các bệnh khác mà không nhận thức, làm chủ được hành vi",
      "dưới 18 tuổi",
      "dưới 14 tuổi",
      "Cả 3 phương án trên đều sai"
    ],
    correctIndex: 0,
    explanation: "Theo Điều 22 BLDS 2015, người do bị bệnh tâm thần hoặc mắc bệnh khác mà không thể nhận thức, làm chủ được hành vi thì theo yêu cầu của người có quyền, lợi ích liên quan, Tòa án ra quyết định tuyên bố mất năng lực hành vi dân sự.",
    images: ["1792837436395_4639516480418908006_g5653112479445915767_83d817ae650808e6798751f81ca5d86f.jpg"]
  },
  {
    id: 117,
    set: 1,
    number: 17,
    section: "Phần 4",
    question: "Pháp luật phát sinh và tồn tại trong xã hội:",
    options: [
      "Có nhà nước",
      "Không có nhà nước",
      "Không có giai cấp",
      "Cả 3 đán án trên đều đúng"
    ],
    correctIndex: 0,
    explanation: "Pháp luật và Nhà nước là hai hiện tượng xã hội có cùng nguồn gốc, cùng phát sinh và tồn tại trong xã hội có giai cấp và có nhà nước.",
    images: ["1792837436395_4639516480418908006_g5653112479445915767_83d817ae650808e6798751f81ca5d86f.jpg"]
  },
  {
    id: 118,
    set: 1,
    number: 18,
    section: "Phần 4",
    question: "Quy phạm pháp luật là những quy tắc xử sự mang tính bắt buộc thể hiện ý chí của:",
    options: [
      "Tổ chức kinh tế",
      "Nhà nước",
      "Mặt trận Tổ quốc",
      "Tổ chức xã hội"
    ],
    correctIndex: 1,
    explanation: "Quy phạm pháp luật do Nhà nước ban hành hoặc thừa nhận, thể hiện ý chí của Nhà nước.",
    images: ["1792837436395_4639516480418908006_g5653112479445915767_83d817ae650808e6798751f81ca5d86f.jpg"]
  },
  {
    id: 119,
    set: 1,
    number: 19,
    section: "Phần 4",
    question: "Nghị định là văn bản quy phạm pháp luật do cơ quan Nhà nước có thẩm quyền ban hành là:",
    options: [
      "Quốc hội",
      "Chủ tịch nước",
      "Chính phủ",
      "Ủy ban thường vụ quốc hội"
    ],
    correctIndex: 2,
    explanation: "Theo Luật Ban hành văn bản quy phạm pháp luật, Chính phủ ban hành Nghị định.",
    images: [
      "1792837436395_4639516480418908006_g5653112479445915767_83d817ae650808e6798751f81ca5d86f.jpg",
      "1792837436414_4639516480418908006_g5653112479445915767_df05e4a9c67738b70f0c0368f52b8af5.jpg"
    ]
  },
  {
    id: 120,
    set: 1,
    number: 20,
    section: "Phần 4",
    question: "Bộ phận nào của quy phạm pháp luật nêu lên cách thức xử sự cho chủ thể?",
    options: [
      "Giả định",
      "Quy định",
      "Giả định và quy định",
      "Chế tài"
    ],
    correctIndex: 1,
    explanation: "Bộ phận Quy định nêu lên quy tắc/cách thức xử sự mà chủ thể được làm, không được làm hoặc phải làm khi ở vào hoàn cảnh đã nêu ở bộ phận giả định.",
    images: ["1792837436414_4639516480418908006_g5653112479445915767_df05e4a9c67738b70f0c0368f52b8af5.jpg"]
  },
  {
    id: 121,
    set: 1,
    number: 21,
    section: "Phần 4",
    question: "Bộ phận nào trong quy phạm pháp luật có chức năng đảm bảo cho quy phạm pháp luật đó được thực hiện nghiêm chỉnh?",
    options: [
      "Giả định và chế tài",
      "Quy định và chế tài",
      "Giả định",
      "Chế tài"
    ],
    correctIndex: 3,
    explanation: "Chế tài nêu lên những biện pháp tác động bất lợi dự kiến áp dụng đối với chủ thể vi phạm pháp luật, nhằm đảm bảo cho quy phạm pháp luật được thực hiện nghiêm chỉnh.",
    images: ["1792837436414_4639516480418908006_g5653112479445915767_df05e4a9c67738b70f0c0368f52b8af5.jpg"]
  },
  {
    id: 122,
    set: 1,
    number: 22,
    section: "Phần 4",
    question: "Khả năng của chủ thể bằng chính hành vi của mình thực hiện được các quyền và nghĩa vụ mà pháp luật quy định được gọi là",
    options: [
      "Năng lực hành vi",
      "Năng lực pháp luật",
      "Năng lực pháp luật và năng lực hành vi",
      "Năng lực chủ thể"
    ],
    correctIndex: 0,
    explanation: "Năng lực hành vi là khả năng của chủ thể được nhà nước thừa nhận, bằng chính hành vi của mình xác lập và thực hiện các quyền và nghĩa vụ pháp lý.",
    images: [
      "1792837436414_4639516480418908006_g5653112479445915767_df05e4a9c67738b70f0c0368f52b8af5.jpg",
      "1792837436433_4639516480418908006_g5653112479445915767_80258836823c30f3585c487e98fe26c0.jpg"
    ]
  },
  {
    id: 123,
    set: 1,
    number: 23,
    section: "Phần 4",
    question: "Cấu tạo của quy phạm pháp luật bao gồm:",
    options: [
      "Chủ thể, khách thể",
      "Giả định, quy định, chế tài",
      "Mặt chủ quan, mặt khách quan",
      "Cả 3 đáp án trên đều sai"
    ],
    correctIndex: 1,
    explanation: "Một quy phạm pháp luật có cấu trúc truyền thống gồm 3 bộ phận: Giả định, Quy định và Chế tài.",
    images: ["1792837436433_4639516480418908006_g5653112479445915767_80258836823c30f3585c487e98fe26c0.jpg"]
  },
  {
    id: 124,
    set: 1,
    number: 24,
    section: "Phần 4",
    question: "Trong lịch sử đã có bao nhiêu hình thức pháp luật?",
    options: [
      "5 hình thức",
      "4 hình thức",
      "3 hình thức",
      "2 hình thức"
    ],
    correctIndex: 1,
    wasWrongInImage: true,
    wrongSelectedInImage: "3 hình thức",
    explanation: "Lưu ý câu dễ nhầm: Trong ảnh gốc chọn '3 hình thức' bị chấm 0/2 điểm. Theo đáp án của đề này, 'trong lịch sử' có 4 hình thức pháp luật (Tập quán pháp, Tiền lệ pháp, Luật tôn giáo/Học thuyết pháp lý, Văn bản quy phạm pháp luật), còn ở Câu 31 hỏi 'Có bao nhiêu nguồn hình thức của pháp luật' thì đáp án đúng (2/2) là '3 nguồn'.",
    images: ["1792837436433_4639516480418908006_g5653112479445915767_80258836823c30f3585c487e98fe26c0.jpg"]
  },
  {
    id: 125,
    set: 1,
    number: 25,
    section: "Phần 4",
    question: "Yếu tố nhỏ nhất trong hệ thống pháp luật là",
    options: [
      "ngành luật",
      "chế định pháp luật",
      "quy phạm pháp luật",
      "cả 3 đáp án trên đều sai"
    ],
    correctIndex: 2,
    explanation: "Quy phạm pháp luật là tế bào/đơn vị nhỏ nhất cấu thành nên hệ thống pháp luật.",
    images: [
      "1792837436433_4639516480418908006_g5653112479445915767_80258836823c30f3585c487e98fe26c0.jpg",
      "1792837436451_4639516480418908006_g5653112479445915767_ef0bffc422038ef12dcacd78e2fb899a.jpg"
    ]
  },
  {
    id: 126,
    set: 1,
    number: 26,
    section: "Phần 5",
    question: "Cá nhân có năng lực hành vi khi",
    options: [
      "Từ đủ 16 tuổi trở lên",
      "Từ đủ 6 tuổi trở lên",
      "Từ đủ 18 tuổi",
      "Từ đủ 14 tuổi trở lên"
    ],
    correctIndex: 1,
    wasWrongInImage: true,
    wrongSelectedInImage: "Từ đủ 18 tuổi",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'Từ đủ 18 tuổi' bị 0/2 điểm. Theo Điều 21 BLDS 2015, người dưới 6 tuổi chưa có năng lực hành vi dân sự; cá nhân bắt đầu có năng lực hành vi từ khi đủ 6 tuổi trở lên (và từ đủ 18 tuổi là có năng lực hành vi đầy đủ).",
    images: ["1792837436451_4639516480418908006_g5653112479445915767_ef0bffc422038ef12dcacd78e2fb899a.jpg"]
  },
  {
    id: 127,
    set: 1,
    number: 27,
    section: "Phần 5",
    question: "Nhà nước nào KHÔNG có tính giai cấp:",
    options: [
      "Nhà nước xã hội chủ nghĩa",
      "Nhà nước tư bản",
      "Nhà nước phong kiến và nhà nước chủ nô",
      "Cả 3 đáp án trên đều sai"
    ],
    correctIndex: 3,
    explanation: "Mọi nhà nước đều mang tính giai cấp, không có nhà nước nào không có tính giai cấp -> Cả 3 đáp án trên đều sai.",
    images: ["1792837436451_4639516480418908006_g5653112479445915767_ef0bffc422038ef12dcacd78e2fb899a.jpg"]
  },
  {
    id: 128,
    set: 1,
    number: 28,
    section: "Phần 5",
    question: "Quan hệ nào dưới đây không phải quan hệ pháp luật:",
    options: [
      "Quan hệ mua bán",
      "Quan hệ thuê mướn",
      "Quan hệ vợ chồng",
      "Quan hệ thầy trò"
    ],
    correctIndex: 3,
    explanation: "Quan hệ thầy trò (tình cảm, đạo đức tôn sư trọng đạo) được điều chỉnh bởi quy phạm đạo đức, không phải là quan hệ pháp luật.",
    images: [
      "1792837436451_4639516480418908006_g5653112479445915767_ef0bffc422038ef12dcacd78e2fb899a.jpg",
      "1792837436469_4639516480418908006_g5653112479445915767_23c33e6895b671cfbefcd44624bad092.jpg"
    ]
  },
  {
    id: 129,
    set: 1,
    number: 29,
    section: "Phần 5",
    question: "Các yếu tố cấu thành nên hệ thống pháp luật xếp theo thứ tự từ nhỏ nhất đến lớn nhất là:",
    options: [
      "Quy phạm pháp luật, chế định pháp luật, ngành luật, hệ thống pháp luật",
      "Hệ thống pháp luật, chế định pháp luật, ngành luật, quy phạm pháp luật",
      "Chế định pháp luật, quy phạm pháp luật, ngành luật, hệ thống pháp luật",
      "Cả 3 đáp án trên đều sai"
    ],
    correctIndex: 0,
    explanation: "Thứ tự từ nhỏ đến lớn: Quy phạm pháp luật -> Chế định pháp luật -> Ngành luật -> Hệ thống pháp luật.",
    images: ["1792837436469_4639516480418908006_g5653112479445915767_23c33e6895b671cfbefcd44624bad092.jpg"]
  },
  {
    id: 130,
    set: 1,
    number: 30,
    section: "Phần 5",
    question: "Các quy phạm pháp luật cùng điều chỉnh về một lĩnh vực đời sống trong xã hội được gọi là",
    options: [
      "Ngành luật",
      "Chế định pháp luật",
      "Hệ thống pháp luật",
      "Cả 3 đáp án trên đều đúng"
    ],
    correctIndex: 0,
    wasWrongInImage: true,
    wrongSelectedInImage: "Chế định pháp luật",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'Chế định pháp luật' bị 0/2 điểm. 'Điều chỉnh về một lĩnh vực đời sống xã hội' là Ngành luật; còn 'điều chỉnh một nhóm quan hệ xã hội cùng loại' mới là Chế định pháp luật (xem Câu 40).",
    images: ["1792837436469_4639516480418908006_g5653112479445915767_23c33e6895b671cfbefcd44624bad092.jpg"]
  },
  {
    id: 131,
    set: 1,
    number: 31,
    section: "Phần 5",
    question: "Có bao nhiêu nguồn hình thức của pháp luật",
    options: [
      "1 nguồn",
      "5 nguồn",
      "4 nguồn",
      "3 nguồn"
    ],
    correctIndex: 3,
    explanation: "Có 3 nguồn hình thức cơ bản của pháp luật: Tập quán pháp, Tiền lệ pháp và Văn bản quy phạm pháp luật.",
    images: [
      "1792837436469_4639516480418908006_g5653112479445915767_23c33e6895b671cfbefcd44624bad092.jpg",
      "1792837436488_4639516480418908006_g5653112479445915767_8902273b207718c6991d9d1a25fbb5e3.jpg"
    ]
  },
  {
    id: 132,
    set: 1,
    number: 32,
    section: "Phần 5",
    question: "Tập quán pháp là",
    options: [
      "Nâng phong tục tập quán lên thành pháp luật",
      "Nâng tín điều tôn giáo lên thành pháp luật",
      "Nâng quy tắc đạo đức lên thành pháp luật",
      "Cả 3 đáp án trên đều sai"
    ],
    correctIndex: 0,
    explanation: "Tập quán pháp là hình thức nhà nước thừa nhận một số phong tục, tập quán đã lưu truyền trong xã hội và nâng chúng lên thành quy tắc xử sự chung được nhà nước bảo đảm thực hiện.",
    images: ["1792837436488_4639516480418908006_g5653112479445915767_8902273b207718c6991d9d1a25fbb5e3.jpg"]
  },
  {
    id: 133,
    set: 1,
    number: 33,
    section: "Phần 5",
    question: "\"Trường hợp những người có quyền thừa kế di sản của nhau đều chết cùng thời điểm hoặc được coi là chết cùng thời điểm do không thể xác định được người nào chết trước (sau đây gọi chung là chết cùng thời điểm) thì họ không được thừa kế di sản của nhau và di sản của mỗi người do người thừa kế của người đó hưởng, trừ trường hợp thừa kế thế vị theo quy định tại Điều 652 của Bộ luật này.\" Quy phạm pháp luật này bao gồm:",
    options: [
      "Quy định và chế tài",
      "Giả định và chế tài",
      "Giả định và quy định",
      "Chế tài"
    ],
    correctIndex: 2,
    explanation: "Quy phạm này nêu hoàn cảnh ('Trường hợp những người... chết cùng thời điểm' -> Giả định) và cách xử sự ('thì họ không được thừa kế di sản của nhau và di sản của mỗi người do người thừa kế của người đó hưởng...' -> Quy định).",
    images: ["1792837436488_4639516480418908006_g5653112479445915767_8902273b207718c6991d9d1a25fbb5e3.jpg"]
  },
  {
    id: 134,
    set: 1,
    number: 34,
    section: "Phần 5",
    question: "\"Trường hợp súc vật thả rông theo tập quán mà gây thiệt hại thì chủ sở hữu súc vật đó phải bồi thường theo tập quán nhưng không được trái pháp luật, đạo đức xã hội.\" Phần gạch chân là:",
    underlined: "Trường hợp súc vật thả rông theo tập quán mà gây thiệt hại",
    options: [
      "Chế tài",
      "Giả định và chế tài",
      "Quy định",
      "Giả định"
    ],
    correctIndex: 3,
    explanation: "Phần gạch chân ('Trường hợp súc vật thả rông theo tập quán mà gây thiệt hại') nêu lên tình huống, hoàn cảnh xảy ra trong thực tế nên là bộ phận Giả định.",
    images: ["1792837436506_4639516480418908006_g5653112479445915767_d6f42dbf3f49c90c5e0c79790288b62c.jpg"]
  },
  {
    id: 135,
    set: 1,
    number: 35,
    section: "Phần 5",
    question: "\"Người do uống rượu hoặc do dùng chất kích thích khác mà lâm vào tình trạng mất khả năng nhận thức và làm chủ hành vi, gây thiệt hại cho người khác thì phải bồi thường.\" Quy phạm pháp luật này bao gồm:",
    options: [
      "Quy định",
      "Giả định",
      "Chế tài",
      "Giả định và quy định"
    ],
    correctIndex: 3,
    explanation: "Theo đáp án chấm 2/2 điểm trong đề: quy phạm này gồm Giả định ('Người do uống rượu... gây thiệt hại cho người khác') và Quy định ('thì phải bồi thường').",
    images: ["1792837436506_4639516480418908006_g5653112479445915767_d6f42dbf3f49c90c5e0c79790288b62c.jpg"]
  },
  {
    id: 136,
    set: 1,
    number: 36,
    section: "Phần 6",
    question: "Tổ chức nào có tư cách pháp nhân:",
    options: [
      "Câu lạc bộ TNTN vận động hiến máu nhân đạo Trường Đại học Thủy lợi",
      "Văn phòng luật sư TP",
      "Trường đại học Thủy lợi",
      "Văn phòng đại diện của công ty SS"
    ],
    correctIndex: 2,
    explanation: "Trường Đại học Thủy lợi được thành lập hợp pháp, có cơ cấu tổ chức chặt chẽ, có tài sản độc lập và nhân danh mình tham gia quan hệ pháp luật độc lập nên có tư cách pháp nhân. CLB, Văn phòng luật sư (do 1 luật sư thành lập), Văn phòng đại diện không có tư cách pháp nhân.",
    images: [
      "1792837436506_4639516480418908006_g5653112479445915767_d6f42dbf3f49c90c5e0c79790288b62c.jpg",
      "1792837436525_4639516480418908006_g5653112479445915767_80a91fdd2fccd46a8ed01694a7097db5.jpg"
    ]
  },
  {
    id: 137,
    set: 1,
    number: 37,
    section: "Phần 6",
    question: "Tổ chức nào không có tư cách pháp nhân",
    options: [
      "Công ty thuốc lá Thăng Long",
      "Đại học Bách khoa",
      "Nhà nước",
      "Văn phòng thừa phát lại"
    ],
    correctIndex: 3,
    wasWrongInImage: true,
    wrongSelectedInImage: "Nhà nước",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'Nhà nước' bị 0/2 điểm. Đáp án đúng là 'Văn phòng thừa phát lại' (tương tự văn phòng luật sư/doanh nghiệp tư nhân, không có tư cách pháp nhân).",
    images: ["1792837436525_4639516480418908006_g5653112479445915767_80a91fdd2fccd46a8ed01694a7097db5.jpg"]
  },
  {
    id: 138,
    set: 1,
    number: 38,
    section: "Phần 6",
    question: "Khách thể trong quan hệ mua bán là:",
    options: [
      "Quyền sở hữu tài sản",
      "Quyền chiếm dụng tài sản",
      "Quyền định đoạt tài sản",
      "Cả 3 đáp án trên đều sai"
    ],
    correctIndex: 0,
    wasWrongInImage: true,
    wrongSelectedInImage: "Cả 3 đáp án trên đều sai",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'Cả 3 đáp án trên đều sai' bị 0/2 điểm. Khách thể của quan hệ pháp luật mua bán là lợi ích mà các bên hướng tới, cụ thể là Quyền sở hữu tài sản.",
    images: ["1792837436525_4639516480418908006_g5653112479445915767_80a91fdd2fccd46a8ed01694a7097db5.jpg"]
  },
  {
    id: 139,
    set: 1,
    number: 39,
    section: "Phần 6",
    question: "\"Tất cả giao dịch do người dưới 6 tuổi thực hiện đều là giao dịch dân sự vô hiệu.\" Khẳng định trên đúng hay sai?",
    options: [
      "Sai",
      "Đúng",
      "Đúng một phần",
      "Sai một phần"
    ],
    correctIndex: 0,
    wasWrongInImage: true,
    wrongSelectedInImage: "Đúng",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'Đúng' bị 0/2 điểm. Theo Điều 125 BLDS 2015, giao dịch dân sự của người chưa đủ 6 tuổi KHÔNG bị vô hiệu nếu là giao dịch nhằm phục vụ nhu cầu sinh hoạt hàng ngày phù hợp với lứa tuổi. Vì vậy khẳng định 'Tất cả... đều vô hiệu' là Sai.",
    images: ["1792837436525_4639516480418908006_g5653112479445915767_80a91fdd2fccd46a8ed01694a7097db5.jpg"]
  },
  {
    id: 140,
    set: 1,
    number: 40,
    section: "Phần 6",
    question: "Các quy phạm pháp luật có đặc điểm chung giống nhau để điều chỉnh một nhóm quan hệ xã hội tương ứng, đó chính là:",
    options: [
      "Quy phạm pháp luật",
      "Chế định pháp luật",
      "Ngành luật",
      "Hệ thống pháp luật"
    ],
    correctIndex: 1,
    explanation: "Chế định pháp luật là tập hợp các quy phạm pháp luật có đặc điểm chung giống nhau điều chỉnh một nhóm quan hệ xã hội tương ứng.",
    images: [
      "1792837436525_4639516480418908006_g5653112479445915767_80a91fdd2fccd46a8ed01694a7097db5.jpg",
      "1792837436543_4639516480418908006_g5653112479445915767_2b8e444ff19d511a7197aff327595027.jpg"
    ]
  },
  {
    id: 141,
    set: 1,
    number: 41,
    section: "Phần 6",
    question: "Nhà nước nào có tính xã hội?",
    options: [
      "Nhà nước chủ nô và Nhà nước phong kiến",
      "Nhà nước tư bản",
      "Nhà nước xã hội chủ nghĩa",
      "Tất cả đáp án trên đều đúng"
    ],
    correctIndex: 3,
    explanation: "Mọi kiểu nhà nước trong lịch sử đều vừa mang tính giai cấp, vừa mang tính xã hội.",
    images: ["1792837436543_4639516480418908006_g5653112479445915767_2b8e444ff19d511a7197aff327595027.jpg"]
  },
  {
    id: 142,
    set: 1,
    number: 42,
    section: "Phần 6",
    question: "Thuộc tính nào sau đây là thuộc tính của pháp luật?",
    options: [
      "Tính được đảm bảo thực hiện bằng nhà nước",
      "Tính bắt buộc chung ( hay tính quy phạm phổ biến )",
      "Tính xác định chặt chẽ về mặt hình thức",
      "Tất cả các đáp án đều đúng"
    ],
    correctIndex: 3,
    explanation: "Pháp luật có 3 thuộc tính cơ bản: Tính quy phạm phổ biến (bắt buộc chung), Tính xác định chặt chẽ về mặt hình thức, và Tính được đảm bảo thực hiện bằng nhà nước.",
    images: ["1792837436543_4639516480418908006_g5653112479445915767_2b8e444ff19d511a7197aff327595027.jpg"]
  },
  {
    id: 143,
    set: 1,
    number: 43,
    section: "Phần 6",
    question: "Chức năng nào sau đây là chức năng của pháp luật ?",
    options: [
      "Chức năng lập hiến và lập pháp",
      "Chức năng giám sát tối cao",
      "Chức năng điều chỉnh các quan hệ xã hội",
      "Tất cả các chức năng đều đúng"
    ],
    correctIndex: 2,
    explanation: "Chức năng của pháp luật gồm: chức năng điều chỉnh các quan hệ xã hội, chức năng bảo vệ và chức năng giáo dục. (Lập hiến, lập pháp và giám sát tối cao là chức năng của Quốc hội).",
    images: [
      "1792837436543_4639516480418908006_g5653112479445915767_2b8e444ff19d511a7197aff327595027.jpg",
      "1792837436562_4639516480418908006_g5653112479445915767_b3f22ba9abcc0198ae8af17dc102bee2.jpg"
    ]
  },
  {
    id: 144,
    set: 1,
    number: 44,
    section: "Phần 6",
    question: "Pháp nhân là tổ chức có",
    options: [
      "Năng lực hành vi",
      "Năng lực pháp luật",
      "Năng lực pháp luật và năng lực hành vi",
      "Cả 3 đáp án trên đều đúng"
    ],
    correctIndex: 2,
    explanation: "Pháp nhân là tổ chức có đầy đủ năng lực chủ thể bao gồm cả năng lực pháp luật và năng lực hành vi (phát sinh đồng thời từ khi được thành lập hợp pháp).",
    images: ["1792837436562_4639516480418908006_g5653112479445915767_b3f22ba9abcc0198ae8af17dc102bee2.jpg"]
  },
  {
    id: 145,
    set: 1,
    number: 45,
    section: "Phần 6",
    question: "Một hành vi bị xem là vi phạm pháp luật khi hành vi đó:",
    options: [
      "Xâm hại một quan hệ trong xã hội",
      "Xâm hại một quan hệ quan trọng trong xã hội",
      "Xâm hại đến một hay nhiều quan hệ được pháp luật bảo vệ",
      "Tất cả đáp án đều đúng"
    ],
    correctIndex: 2,
    explanation: "Hành vi vi phạm pháp luật là hành vi trái pháp luật, có lỗi, do chủ thể có năng lực trách nhiệm pháp lý thực hiện, xâm hại đến các quan hệ xã hội được pháp luật bảo vệ.",
    images: ["1792837436562_4639516480418908006_g5653112479445915767_b3f22ba9abcc0198ae8af17dc102bee2.jpg"]
  },
  {
    id: 146,
    set: 1,
    number: 46,
    section: "Phần 7",
    question: "\"Người nào sản xuất, buôn bán hàng giả là thuốc chữa bệnh, thuốc phòng bệnh, thì bị phạt tù từ 02 năm đến 07 năm.\" Phần gạch chân là:",
    underlined: "thì bị phạt tù từ 02 năm đến 07 năm.",
    options: [
      "Quy định",
      "Giả định",
      "Chế tài",
      "Tất cả đáp án đều sai"
    ],
    correctIndex: 2,
    explanation: "Phần gạch chân ('thì bị phạt tù từ 02 năm đến 07 năm') nêu hậu quả pháp lý bất lợi (hình phạt) nên là bộ phận Chế tài.",
    images: [
      "1792837436562_4639516480418908006_g5653112479445915767_b3f22ba9abcc0198ae8af17dc102bee2.jpg",
      "1792837436580_4639516480418908006_g5653112479445915767_822f53860e5ad4c5a8f274bd772f72fc.jpg"
    ]
  },
  {
    id: 147,
    set: 1,
    number: 47,
    section: "Phần 7",
    question: "\"Người nào làm, tàng trữ, vận chuyển, lưu hành tiền giả, thì bị phạt tù từ 03 năm đến 07 năm.\" Phần gạch chân là:",
    underlined: "Người nào làm, tàng trữ, vận chuyển, lưu hành tiền giả,",
    options: [
      "Chế tài",
      "Quy định",
      "Giả định và chế tài",
      "Giả định"
    ],
    correctIndex: 3,
    explanation: "Phần gạch chân ('Người nào làm, tàng trữ, vận chuyển, lưu hành tiền giả') nêu chủ thể và hoàn cảnh thực hiện hành vi nên là bộ phận Giả định.",
    images: ["1792837436580_4639516480418908006_g5653112479445915767_822f53860e5ad4c5a8f274bd772f72fc.jpg"]
  },
  {
    id: 148,
    set: 1,
    number: 48,
    section: "Phần 7",
    question: "Quy phạm pháp luật lựa chọn là quy phạm:",
    options: [
      "Đặt ra một việc cụ thể và cấm chủ thể khi tham gia vào quan hệ pháp luật thực hiện việc đó",
      "Đặt ra một việc cụ thể và bắt buộc chủ thể khi tham gia vào quan hệ pháp luật thực hiện việc đó",
      "Đưa ra các trường hợp và cho phép chủ thể khi tham gia vào quan hệ pháp luật có quyền lựa chọn thực hiện hoặc không thực hiện theo các trường hợp đã đưa ra",
      "Tất cả đều đúng"
    ],
    correctIndex: 2,
    explanation: "Quy phạm lựa chọn (tùy nghi) cho phép các chủ thể tự định đoạt, lựa chọn cách thức xử sự trong phạm vi các trường hợp mà pháp luật đã quy định.",
    images: [
      "1792837436580_4639516480418908006_g5653112479445915767_822f53860e5ad4c5a8f274bd772f72fc.jpg",
      "1792837436599_4639516480418908006_g5653112479445915767_8bf9b2306b3ba94d65426458c10f4fb0.jpg"
    ]
  },
  {
    id: 149,
    set: 1,
    number: 49,
    section: "Phần 7",
    question: "Tổng hợp các quy phạm pháp luật điều chỉnh các lĩnh vực khác nhau của đời sống xã hội được gọi là:",
    options: [
      "Quy phạm pháp luật",
      "Ngành luật",
      "Chế định pháp luật",
      "Hệ thống pháp luật"
    ],
    correctIndex: 3,
    explanation: "Hệ thống pháp luật là tổng thể các quy phạm pháp luật có mối liên hệ nội tại thống nhất, được phân định thành các chế định pháp luật, các ngành luật để điều chỉnh các lĩnh vực khác nhau của đời sống xã hội.",
    images: ["1792837436599_4639516480418908006_g5653112479445915767_8bf9b2306b3ba94d65426458c10f4fb0.jpg"]
  },
  {
    id: 150,
    set: 1,
    number: 50,
    section: "Phần 7",
    question: "\"Trường hợp bên mua không hoàn thành nghĩa vụ thanh toán cho bên bán theo thỏa thuận thì bên bán có quyền đòi lại tài sản.\" Phần gạch chân là:",
    underlined: "bên bán có quyền đòi lại tài sản.",
    options: [
      "Chế tài",
      "Giả định",
      "Quy định",
      "Giả định và quy định"
    ],
    correctIndex: 2,
    explanation: "Phần gạch chân ('bên bán có quyền đòi lại tài sản') nêu quyền xử sự của chủ thể khi hoàn cảnh giả định xảy ra, nên là bộ phận Quy định.",
    images: ["1792837436599_4639516480418908006_g5653112479445915767_8bf9b2306b3ba94d65426458c10f4fb0.jpg"]
  },

  // ==========================================
  // BỘ ĐỀ 2 (50 CÂU - GIAO DIỆN TÍM - 5 PHẦN)
  // ==========================================
  {
    id: 201,
    set: 2,
    number: 1,
    section: "Phần 1",
    question: "Văn bản nào có hiệu lực cao nhất trong hệ thống pháp luật Việt Nam:",
    options: [
      "A. Pháp lệnh",
      "B. Luật",
      "C. Hiến pháp",
      "D. Nghị quyết"
    ],
    correctIndex: 2,
    explanation: "Hiến pháp là luật cơ bản của nước CHXHCN Việt Nam, có hiệu lực pháp lý cao nhất.",
    images: ["1792838985785_4639516480418908006_g5653112479445915767_53dcb37b264960c1b3d7a58da942c66c.jpg"]
  },
  {
    id: 202,
    set: 2,
    number: 2,
    section: "Phần 1",
    question: "Các yếu tố cấu thành quan hệ pháp luật bao gồm:",
    options: [
      "A. Chủ thể, nội dung, sự kiện pháp lý",
      "B. Chủ thể, khách thể",
      "C. Nội dung, khách thể, sự kiện pháp lý",
      "D. Chủ thể, nội dung, khách thể"
    ],
    correctIndex: 3,
    explanation: "Quan hệ pháp luật được cấu thành bởi 3 yếu tố: Chủ thể, Nội dung và Khách thể.",
    images: ["1792838985785_4639516480418908006_g5653112479445915767_53dcb37b264960c1b3d7a58da942c66c.jpg"]
  },
  {
    id: 203,
    set: 2,
    number: 3,
    section: "Phần 1",
    question: "Khẳng định nào là đúng:",
    options: [
      "A. Trong các loại nguồn của pháp luật, chỉ có VBPL là nguồn của pháp luật Việt Nam.",
      "B. Trong các loại nguồn của pháp luật, chỉ có VBPL và tập quán pháp là nguồn của pháp luật Việt Nam.",
      "C. Trong các loại nguồn của pháp luật, chỉ có VBPL và tiền lệ pháp là nguồn của pháp luật Việt Nam.",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 3,
    explanation: "Tại Việt Nam hiện nay, cả 3 loại nguồn (Văn bản quy phạm pháp luật, Tập quán pháp và Tiền lệ pháp/Án lệ) đều được thừa nhận là nguồn của pháp luật -> Cả A, B và C đều sai.",
    images: [
      "1792838985785_4639516480418908006_g5653112479445915767_53dcb37b264960c1b3d7a58da942c66c.jpg",
      "1792838985822_4639516480418908006_g5653112479445915767_738e4228dccb2aa7b880b546cdfad9c9.jpg"
    ]
  },
  {
    id: 204,
    set: 2,
    number: 4,
    section: "Phần 1",
    question: "Tuân thủ pháp luật:",
    options: [
      "A. Không được làm những điều mà pháp luật cấm bằng hành vi thụ động",
      "B. Phải làm những điều mà pháp luật bắt buộc bằng hành vi tích cực",
      "C. Có quyền thực hiện hay không thực hiện những điều mà pháp luật cho phép",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 0,
    explanation: "Tuân thủ (tuân theo) pháp luật là hình thức thực hiện pháp luật, trong đó các chủ thể kiềm chế không tiến hành những hành vi mà pháp luật cấm (bằng hành vi thụ động).",
    images: ["1792838985822_4639516480418908006_g5653112479445915767_738e4228dccb2aa7b880b546cdfad9c9.jpg"]
  },
  {
    id: 205,
    set: 2,
    number: 5,
    section: "Phần 1",
    question: "Chế định “Thừa kế” thuộc ngành luật nào:",
    options: [
      "A. Ngành luật hành chính",
      "B. Ngành luật tố tụng hình sự",
      "C. Ngành luật quốc tế",
      "D. Ngành luật dân sự"
    ],
    correctIndex: 3,
    explanation: "Chế định Thừa kế là một chế định quan trọng thuộc Ngành luật dân sự.",
    images: ["1792838985843_4639516480418908006_g5653112479445915767_07582e902f7bdf3ae9c912bae803ab8d.jpg"]
  },
  {
    id: 206,
    set: 2,
    number: 6,
    section: "Phần 1",
    question: "Đâu là ngành luật trong hệ thống pháp luật Việt Nam:",
    options: [
      "A. Ngành luật hình sự",
      "B. Ngành luật an ninh quốc gia",
      "C. Ngành luật kế toán",
      "D. Ngành luật môi trường"
    ],
    correctIndex: 0,
    explanation: "Trong 12 ngành luật của hệ thống pháp luật Việt Nam (theo giáo trình), Ngành luật hình sự là một ngành luật độc lập.",
    images: [
      "1792838985843_4639516480418908006_g5653112479445915767_07582e902f7bdf3ae9c912bae803ab8d.jpg",
      "1792838985864_4639516480418908006_g5653112479445915767_788e40b13560fa96aabe12c5649c85dc.jpg"
    ]
  },
  {
    id: 207,
    set: 2,
    number: 7,
    section: "Phần 1",
    question: "Đâu không phải là ngành luật trong hệ thống pháp luật Việt Nam:",
    options: [
      "A. Ngành luật dân sự",
      "B. Ngành luật hôn nhân và gia đình",
      "C. Ngành luật doanh nghiệp",
      "D. Ngành luật lao động"
    ],
    correctIndex: 2,
    explanation: "Luật Doanh nghiệp là một đạo luật thuộc Ngành luật kinh tế/thương mại, không phải là tên một ngành luật độc lập trong 12 ngành luật.",
    images: [
      "1792838985843_4639516480418908006_g5653112479445915767_07582e902f7bdf3ae9c912bae803ab8d.jpg",
      "1792838985864_4639516480418908006_g5653112479445915767_788e40b13560fa96aabe12c5649c85dc.jpg"
    ]
  },
  {
    id: 208,
    set: 2,
    number: 8,
    section: "Phần 1",
    question: "Phương pháp tự do, tự nguyện cam kết, thỏa thuận là phương pháp điều chỉnh của ngành luật nào:",
    options: [
      "A. Ngành luật dân sự",
      "B. Ngành luật hành chính",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 0,
    explanation: "Ngành luật dân sự điều chỉnh các quan hệ tài sản và nhân thân bằng phương pháp bình đẳng, tự do, tự nguyện cam kết, thỏa thuận.",
    images: ["1792838985864_4639516480418908006_g5653112479445915767_788e40b13560fa96aabe12c5649c85dc.jpg"]
  },
  {
    id: 209,
    set: 2,
    number: 9,
    section: "Phần 1",
    question: "Khẳng định nào sau đây là sai:",
    options: [
      "A. Hệ thống hình phạt được chia thành hai nhóm: hình phạt chính và hình phạt bổ sung",
      "B. Phạt tiền và trục xuất vừa có thể là hình phạt chính, vừa là hình phạt bổ sung",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 3,
    wasWrongInImage: true,
    wrongSelectedInImage: "C. Cả A và B đều đúng",
    explanation: "Lưu ý câu bẫy bị sai (0/2) trong ảnh gốc: Câu hỏi hỏi 'Khẳng định nào sau đây là SAI'. Vì cả hai mệnh đề A và B đều là quy định ĐÚNG của Bộ luật Hình sự (Điều 32 BLHS), nên không có khẳng định nào ở A và B là sai -> Chọn 'D. Cả A và B đều sai' (nghĩa là cả phương án A và phương án B đều không phải là khẳng định sai).",
    images: [
      "1792838985864_4639516480418908006_g5653112479445915767_788e40b13560fa96aabe12c5649c85dc.jpg",
      "1792838985884_4639516480418908006_g5653112479445915767_e8619dd8732509bccee756d6d5b12c7d.jpg"
    ]
  },
  {
    id: 210,
    set: 2,
    number: 10,
    section: "Phần 1",
    question: "Văn bản quy phạm pháp luật:",
    options: [
      "A. Bắt buộc phải có quy phạm pháp luật",
      "B. Không có quy phạm pháp luật",
      "C. Có thể có hoặc không có quy phạm pháp luật",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 0,
    explanation: "Văn bản quy phạm pháp luật là văn bản có chứa quy phạm pháp luật (bắt buộc phải có quy phạm pháp luật).",
    images: ["1792838985884_4639516480418908006_g5653112479445915767_e8619dd8732509bccee756d6d5b12c7d.jpg"]
  },
  {
    id: 211,
    set: 2,
    number: 11,
    section: "Phần 2",
    question: "Khẳng định nào là đúng:",
    options: [
      "A. Nguồn của pháp luật nói chung là: VBQPPL; tập quán pháp; và tiền lệ pháp. Chỉ có VBQPPL là nguồn của pháp luật Việt Nam.",
      "B. Nguồn của pháp luật nói chung là: VBQPPL; tập quán pháp; và tiền lệ pháp. Chỉ có VBQPPL và tập quán pháp là nguồn của pháp luật Việt Nam.",
      "C. Nguồn của pháp luật nói chung là: VBQPPL; tập quán pháp; và tiền lệ pháp. Chỉ có VBQPPL và tiền lệ pháp là nguồn của pháp luật Việt Nam.",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 3,
    explanation: "Pháp luật Việt Nam thừa nhận cả 3 nguồn: VBQPPL, tập quán pháp và tiền lệ pháp (án lệ), nên các câu dùng từ 'Chỉ có...' ở A, B, C đều sai -> Chọn D.",
    images: [
      "1792838985884_4639516480418908006_g5653112479445915767_e8619dd8732509bccee756d6d5b12c7d.jpg",
      "1792838985903_4639516480418908006_g5653112479445915767_42dfc3bdd63ab2b3309f6afb763fe2e3.jpg"
    ]
  },
  {
    id: 212,
    set: 2,
    number: 12,
    section: "Phần 2",
    question: "Quốc hội có quyền ban hành những loại VBPL nào:",
    options: [
      "A. Hiến pháp, bộ luật, luật",
      "B. Hiến pháp, luật, pháp lệnh",
      "C. Hiến pháp, bộ luật, luật, nghị quyết",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 2,
    explanation: "Theo Điều 4 Luật Ban hành VBQPPL, Quốc hội ban hành: Hiến pháp, Bộ luật, Luật, Nghị quyết.",
    images: ["1792838985903_4639516480418908006_g5653112479445915767_42dfc3bdd63ab2b3309f6afb763fe2e3.jpg"]
  },
  {
    id: 213,
    set: 2,
    number: 13,
    section: "Phần 2",
    question: "Hình thức thực hiện pháp luật nào cần phải có sự tham gia của nhà nước:",
    options: [
      "A. Tuân thủ pháp luật",
      "B. Thi hành pháp luật",
      "C. Sử dụng pháp luật",
      "D. Áp dụng pháp luật"
    ],
    correctIndex: 3,
    explanation: "Áp dụng pháp luật là hình thức thực hiện pháp luật luôn có sự tham gia của cơ quan nhà nước hoặc người có thẩm quyền.",
    images: [
      "1792838985903_4639516480418908006_g5653112479445915767_42dfc3bdd63ab2b3309f6afb763fe2e3.jpg",
      "1792838985921_4639516480418908006_g5653112479445915767_99ad5259cc01ffdb7a9d0a8b946a093a.jpg"
    ]
  },
  {
    id: 214,
    set: 2,
    number: 14,
    section: "Phần 2",
    question: "Người bị hạn chế NLHV dân sự là người nghiện ma túy, nghiện các chất kích thích khác:",
    options: [
      "A. Dẫn đến phá tán tài sản của gia đình.",
      "B. Dẫn đến phá tán tài sản của gia đình thì theo yêu cầu của người có quyền, lợi ích liên quan, cơ quan, tổ chức hữu quan, Tòa án có thể ra quyết định tuyên bố là người bị hạn chế NLHV dân sự.",
      "C. Dẫn đến phá tán tài sản của gia đình thì theo yêu cầu của người có quyền, lợi ích liên quan, cơ quan, tổ chức hữu quan, Tòa án, Viện kiểm sát có thể ra quyết định tuyên bố là người bị hạn chế NLHV dân sự.",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 1,
    explanation: "Theo Điều 24 BLDS 2015, chỉ có Tòa án mới có thẩm quyền ra quyết định tuyên bố một người bị hạn chế năng lực hành vi dân sự theo yêu cầu của người có quyền, lợi ích liên quan hoặc cơ quan, tổ chức hữu quan.",
    images: ["1792838985921_4639516480418908006_g5653112479445915767_99ad5259cc01ffdb7a9d0a8b946a093a.jpg"]
  },
  {
    id: 215,
    set: 2,
    number: 15,
    section: "Phần 2",
    question: "Thuộc tính (đặc trưng) nào sau đây là của pháp luật:",
    options: [
      "A. Giáo dục hành vi con người",
      "B. Tính được đảm bảo thực hiện bằng nhà nước",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 1,
    explanation: "Tính được đảm bảo thực hiện bằng nhà nước là thuộc tính (đặc trưng) của pháp luật, còn giáo dục hành vi con người là chức năng của pháp luật.",
    images: ["1792838985940_4639516480418908006_g5653112479445915767_17e053cf205ed23ef52248c31d2327b5.jpg"]
  },
  {
    id: 216,
    set: 2,
    number: 16,
    section: "Phần 2",
    question: "Thuộc tính (đặc trưng) nào sau đây là của pháp luật:",
    options: [
      "A. Tính bắt buộc chung (tính quy phạm phổ biến)",
      "B. Tính được đảm bảo thực hiện bằng nhà nước",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 2,
    explanation: "Cả tính bắt buộc chung (tính quy phạm phổ biến) và tính được đảm bảo thực hiện bằng nhà nước đều là thuộc tính của pháp luật.",
    images: ["1792838985940_4639516480418908006_g5653112479445915767_17e053cf205ed23ef52248c31d2327b5.jpg"]
  },
  {
    id: 217,
    set: 2,
    number: 17,
    section: "Phần 2",
    question: "Khẳng định nào là đúng:",
    options: [
      "A. QPPL là quy phạm xã hội",
      "B. Quy phạm tôn giáo không phải là quy phạm xã hội",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 0,
    explanation: "Quy phạm pháp luật là một loại quy phạm xã hội đặc biệt do nhà nước ban hành hoặc thừa nhận.",
    images: [
      "1792838985940_4639516480418908006_g5653112479445915767_17e053cf205ed23ef52248c31d2327b5.jpg",
      "1792838985958_4639516480418908006_g5653112479445915767_a85980e2eb4ba4f9fdd77655c85cf0f5.jpg"
    ]
  },
  {
    id: 218,
    set: 2,
    number: 18,
    section: "Phần 2",
    question: "Sự kiện pháp lý có thể:",
    options: [
      "A. Làm phát sinh một QHPL cụ thể",
      "B. Làm phát sinh, thay đổi một QHPL cụ thể",
      "C. Làm phát sinh, thay đổi, chấm dứt một QHPL cụ thể",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 2,
    explanation: "Sự kiện pháp lý là những sự kiện thực tế mà khi chúng xảy ra được pháp luật gắn với việc làm phát sinh, thay đổi hoặc chấm dứt một quan hệ pháp luật cụ thể.",
    images: [
      "1792838985958_4639516480418908006_g5653112479445915767_a85980e2eb4ba4f9fdd77655c85cf0f5.jpg",
      "1792838985976_4639516480418908006_g5653112479445915767_a4aee237efbd8f55367a3fc3d16758c9.jpg"
    ]
  },
  {
    id: 219,
    set: 2,
    number: 19,
    section: "Phần 2",
    question: "Quy phạm nào có chức năng điều chỉnh các quan hệ xã hội:",
    options: [
      "A. Quy phạm đạo đức",
      "B. Quy phạm tập quán",
      "C. Quy phạm pháp luật",
      "D. Cả A , B và C đều đúng"
    ],
    correctIndex: 3,
    explanation: "Mọi quy phạm xã hội (đạo đức, tập quán, tôn giáo, pháp luật) đều có chức năng điều chỉnh các quan hệ xã hội.",
    images: [
      "1792838985958_4639516480418908006_g5653112479445915767_a85980e2eb4ba4f9fdd77655c85cf0f5.jpg",
      "1792838985976_4639516480418908006_g5653112479445915767_a4aee237efbd8f55367a3fc3d16758c9.jpg"
    ]
  },
  {
    id: 220,
    set: 2,
    number: 20,
    section: "Phần 2",
    question: "Khẳng định nào sau đây là đúng:",
    options: [
      "B. Chế độ chính trị phản ánh cách thức tổ chức quyền lực nhà nước.",
      "A. Chế độ chính trị là các phương pháp, cách thức mà giai cấp thống trị sử dụng để thực hiện quyền lực nhà nước.",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 1,
    wasWrongInImage: true,
    wrongSelectedInImage: "B. Chế độ chính trị phản ánh cách thức tổ chức quyền lực nhà nước.",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn đáp án B bị 0/2 điểm. Theo định nghĩa chuẩn, Chế độ chính trị là tổng thể các phương pháp, cách thức, thủ đoạn mà giai cấp thống trị sử dụng để thực hiện quyền lực nhà nước (Đáp án A). Còn cách thức tổ chức quyền lực nhà nước là Hình thức chính thể/cấu trúc.",
    images: ["1792838985976_4639516480418908006_g5653112479445915767_a4aee237efbd8f55367a3fc3d16758c9.jpg"]
  },
  {
    id: 221,
    set: 2,
    number: 21,
    section: "Phần 3",
    question: "Điều kiện để một tổ chức tham gia vào một QHPL cụ thể:",
    options: [
      "A. Chỉ cần có năng lực pháp luật",
      "B. Chỉ cần có năng lực hành vi",
      "C. Có năng lực chủ thể pháp luật",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 2,
    explanation: "Để tham gia độc lập vào một quan hệ pháp luật cụ thể, chủ thể phải có năng lực chủ thể pháp luật (bao gồm cả năng lực pháp luật và năng lực hành vi).",
    images: [
      "1792838985976_4639516480418908006_g5653112479445915767_a4aee237efbd8f55367a3fc3d16758c9.jpg",
      "1792838985995_4639516480418908006_g5653112479445915767_b6e9bb3616a43439c256b761267b60ff.jpg"
    ]
  },
  {
    id: 222,
    set: 2,
    number: 22,
    section: "Phần 3",
    question: "Quyền sở hữu tài sản của cá nhân xuất hiện từ lúc:",
    options: [
      "A. Từ khi được sinh ra",
      "B. Từ đủ 15 tuổi",
      "C. Từ đủ 18 tuổi",
      "D. Từ đủ 21 tuổi"
    ],
    correctIndex: 0,
    explanation: "Quyền sở hữu tài sản thuộc về năng lực pháp luật dân sự của cá nhân, có từ khi người đó sinh ra và chấm dứt khi người đó chết.",
    images: ["1792838985995_4639516480418908006_g5653112479445915767_b6e9bb3616a43439c256b761267b60ff.jpg"]
  },
  {
    id: 223,
    set: 2,
    number: 23,
    section: "Phần 3",
    question: "Bộ luật nào dưới đây quy định một cách cơ bản về chế độ chính trị, chế độ kinh tế, văn hóa, xã hội và tổ chức bộ máy nhà nước:",
    options: [
      "A. Bộ luật dân sự",
      "B. Bộ luật hình sự",
      "C. Hiến pháp",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 2,
    explanation: "Hiến pháp là đạo luật cơ bản quy định về chế độ chính trị, kinh tế, văn hóa, xã hội, quyền con người, quyền và nghĩa vụ cơ bản của công dân và tổ chức bộ máy nhà nước.",
    images: [
      "1792838985995_4639516480418908006_g5653112479445915767_b6e9bb3616a43439c256b761267b60ff.jpg",
      "1792838986014_4639516480418908006_g5653112479445915767_99fd29799d3844edee7260e9b08f9190.jpg"
    ]
  },
  {
    id: 224,
    set: 2,
    number: 24,
    section: "Phần 3",
    question: "Chế độ sở hữu đất đai của Nhà nước CHXHCN Việt Nam là:",
    options: [
      "A. Chế độ sở hữu tư nhân",
      "B. Chế độ sở hữu toàn dân",
      "C. Chế độ sở hữu tập thể",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 1,
    explanation: "Theo Điều 53 Hiến pháp 2013, đất đai thuộc sở hữu toàn dân do Nhà nước đại diện chủ sở hữu và thống nhất quản lý.",
    images: ["1792838986014_4639516480418908006_g5653112479445915767_99fd29799d3844edee7260e9b08f9190.jpg"]
  },
  {
    id: 225,
    set: 2,
    number: 25,
    section: "Phần 3",
    question: "Theo quy định của Hiến pháp 2013 của nước CHXHCN Việt Nam, Quốc hội, Chính phủ, Chủ tịch nước có nhiệm kỳ:",
    options: [
      "A. 3 năm",
      "B. 6 năm",
      "C. 4 năm",
      "D. 5 năm"
    ],
    correctIndex: 3,
    explanation: "Theo Hiến pháp 2013, nhiệm kỳ của mỗi khóa Quốc hội là 5 năm; nhiệm kỳ của Chủ tịch nước và Chính phủ theo nhiệm kỳ của Quốc hội (5 năm).",
    images: [
      "1792838986014_4639516480418908006_g5653112479445915767_99fd29799d3844edee7260e9b08f9190.jpg",
      "1792838986033_4639516480418908006_g5653112479445915767_70aca355dae7a595b86f4e9846178ff1.jpg"
    ]
  },
  {
    id: 226,
    set: 2,
    number: 26,
    section: "Phần 3",
    question: "Bản Hiến pháp đang có hiệu lực của Nhà nước CHXHCN Việt Nam là:",
    options: [
      "A. Hiến pháp 2013",
      "B. Hiến pháp 2013, Hiến pháp 1992 và Hiến pháp 1980",
      "C. Hiến pháp 2013, Hiến pháp 1992, Hiến pháp 1980 và Hiến pháp 1959",
      "D. Hiến pháp 2013, Hiến pháp 1992, Hiến pháp 1980, Hiến pháp 1959 và Hiến pháp 1946"
    ],
    correctIndex: 0,
    explanation: "Bản Hiến pháp đang có hiệu lực hiện hành tại Việt Nam là Hiến pháp năm 2013.",
    images: ["1792838986033_4639516480418908006_g5653112479445915767_70aca355dae7a595b86f4e9846178ff1.jpg"]
  },
  {
    id: 227,
    set: 2,
    number: 27,
    section: "Phần 3",
    question: "Theo quy định Hiến pháp Việt Nam 2013, cơ quan nào sau đây có chức năng xét xử:",
    options: [
      "A. Chính phủ",
      "B. Tòa án nhân dân",
      "C. Quốc hội",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 1,
    explanation: "Theo Điều 102 Hiến pháp 2013, Tòa án nhân dân là cơ quan xét xử của nước CHXHCN Việt Nam, thực hiện quyền tư pháp.",
    images: [
      "1792838986033_4639516480418908006_g5653112479445915767_70aca355dae7a595b86f4e9846178ff1.jpg",
      "1792838986052_4639516480418908006_g5653112479445915767_d531876683433118882f7cc15ff69501.jpg"
    ]
  },
  {
    id: 228,
    set: 2,
    number: 28,
    section: "Phần 3",
    question: "Độ tuổi tối thiểu mà cá nhân có thể phải chịu trách nhiệm hành chính là:",
    options: [
      "A. Từ đủ 14 tuổi",
      "B. Từ đủ 16 tuổi",
      "C. Từ đủ 18 tuổi",
      "D. Từ đủ 21 tuổi"
    ],
    correctIndex: 0,
    wasWrongInImage: true,
    wrongSelectedInImage: "B. Từ đủ 16 tuổi",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'B. Từ đủ 16 tuổi' bị 0/2 điểm. Theo Điều 5 Luật Xử lý vi phạm hành chính, người từ đủ 14 tuổi đến dưới 16 tuổi bị xử phạt vi phạm hành chính về vi phạm hành chính do cố ý -> Độ tuổi tối thiểu là A. Từ đủ 14 tuổi.",
    images: ["1792838986052_4639516480418908006_g5653112479445915767_d531876683433118882f7cc15ff69501.jpg"]
  },
  {
    id: 229,
    set: 2,
    number: 29,
    section: "Phần 3",
    question: "Năng lực pháp luật là:",
    options: [
      "A. Khả năng của chủ thể có được các quyền chủ thể và mang các nghĩa vụ pháp lý mà nhà nước thừa nhận.",
      "B. Khả năng của chủ thể được nhà nước thừa nhận, bằng các hành vi của mình thực hiện các quyền chủ thể và nghĩa vụ pháp lý, tham gia vào các QHPL.",
      "C. Cả A và B đều đúng.",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 0,
    explanation: "Năng lực pháp luật là khả năng của chủ thể có được các quyền chủ thể và nghĩa vụ pháp lý mà nhà nước quy định/thừa nhận (Đáp án A). Còn Đáp án B là định nghĩa Năng lực hành vi.",
    images: [
      "1792838986052_4639516480418908006_g5653112479445915767_d531876683433118882f7cc15ff69501.jpg",
      "1792838986071_4639516480418908006_g5653112479445915767_c2cb7d550d4345a84de6b93d108116e0.jpg"
    ]
  },
  {
    id: 230,
    set: 2,
    number: 30,
    section: "Phần 3",
    question: "Chức năng nào không phải là chức năng của pháp luật:",
    options: [
      "A. Chức năng điều chỉnh các quan hệ xã hội",
      "B. Chức năng lập hiến và lập pháp",
      "C. Chức năng bảo vệ các quan hệ xã hội",
      "D. Chức năng giáo dục"
    ],
    correctIndex: 1,
    explanation: "Chức năng lập hiến và lập pháp là chức năng của Quốc hội, không phải chức năng của pháp luật.",
    images: ["1792838986071_4639516480418908006_g5653112479445915767_c2cb7d550d4345a84de6b93d108116e0.jpg"]
  },
  {
    id: 231,
    set: 2,
    number: 31,
    section: "Phần 4",
    question: "Câu khẳng định nào là đúng",
    options: [
      "A. Năng lực pháp luật luôn mang tính giai cấp.",
      "B. Năng lực pháp luật không mang tính giai cấp.",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 1,
    wasWrongInImage: true,
    wrongSelectedInImage: "A. Năng lực pháp luật luôn mang tính giai cấp.",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'A. Năng lực pháp luật luôn mang tính giai cấp' bị đánh dấu X đỏ (0/2 điểm). Trong bộ đề này, đáp án được thiết lập là B (hoặc D nếu xét tùy điều kiện lịch sử).",
    images: [
      "1792838986071_4639516480418908006_g5653112479445915767_c2cb7d550d4345a84de6b93d108116e0.jpg",
      "1792838986089_4639516480418908006_g5653112479445915767_e5b60565aa6beacfdca752d1429867a8.jpg"
    ]
  },
  {
    id: 232,
    set: 2,
    number: 32,
    section: "Phần 4",
    question: "Câu khẳng định nào là đúng",
    options: [
      "A. Năng lực pháp luật luôn mang tính giai cấp.",
      "B. Năng lực hành vi luôn mang tính giai cấp.",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 3,
    wasWrongInImage: true,
    wrongSelectedInImage: "A. Năng lực pháp luật luôn mang tính giai cấp.",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'A. Năng lực pháp luật luôn mang tính giai cấp' bị đánh dấu X đỏ (0/2 điểm). Năng lực hành vi phụ thuộc vào độ tuổi và khả năng nhận thức chứ không mang tính giai cấp, và A cũng bị tính là sai -> Đáp án đúng là D. Cả A và B đều sai.",
    images: [
      "1792838986089_4639516480418908006_g5653112479445915767_e5b60565aa6beacfdca752d1429867a8.jpg",
      "1792838986108_4639516480418908006_g5653112479445915767_7921d0ffeef454d1e627a2c4b6bae4d3.jpg"
    ]
  },
  {
    id: 233,
    set: 2,
    number: 33,
    section: "Phần 4",
    question: "Chủ thể nào có quyền tiến hành hoạt động áp dụng pháp luật:",
    options: [
      "A. Cá nhân, tổ chức xã hội và doanh nghiệp",
      "B. Cơ quan nhà nước, cá nhân có thẩm quyền",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 1,
    explanation: "Chỉ có cơ quan nhà nước, nhà chức trách (cá nhân) có thẩm quyền hoặc tổ chức được nhà nước trao quyền mới có quyền tiến hành hoạt động áp dụng pháp luật.",
    images: [
      "1792838986089_4639516480418908006_g5653112479445915767_e5b60565aa6beacfdca752d1429867a8.jpg",
      "1792838986108_4639516480418908006_g5653112479445915767_7921d0ffeef454d1e627a2c4b6bae4d3.jpg"
    ]
  },
  {
    id: 234,
    set: 2,
    number: 34,
    section: "Phần 4",
    question: "Hành vi “gây rối trật tự công cộng” có thể là:",
    options: [
      "A. Hành vi vi phạm hành chính",
      "B. Hành vi vi phạm dân sự",
      "C. Cả A và B",
      "D. Cả A và B hoặc A hoặc B"
    ],
    correctIndex: 0,
    explanation: "Trong các phương án đưa ra, hành vi gây rối trật tự công cộng là hành vi vi phạm hành chính (hoặc hình sự nếu đủ yếu tố cấu thành tội phạm), không phải vi phạm dân sự.",
    images: ["1792838986108_4639516480418908006_g5653112479445915767_7921d0ffeef454d1e627a2c4b6bae4d3.jpg"]
  },
  {
    id: 235,
    set: 2,
    number: 35,
    section: "Phần 4",
    question: "Khẳng định nào là đúng:",
    options: [
      "A. Văn bản pháp luật là một loại văn bản quy phạm pháp luật",
      "B. Văn bản quy phạm pháp luật là một loại văn bản pháp luật",
      "C. Văn bản pháp luật không có quy phạm pháp luật",
      "D. Cả B và C đều đúng"
    ],
    correctIndex: 1,
    explanation: "Văn bản pháp luật (theo nghĩa rộng gồm văn bản quy phạm pháp luật và văn bản áp dụng pháp luật) nên Văn bản quy phạm pháp luật là một loại văn bản pháp luật.",
    images: [
      "1792838986108_4639516480418908006_g5653112479445915767_7921d0ffeef454d1e627a2c4b6bae4d3.jpg",
      "1792838986126_4639516480418908006_g5653112479445915767_acaec20cc35096625999031a44898765.jpg"
    ]
  },
  {
    id: 236,
    set: 2,
    number: 36,
    section: "Phần 4",
    question: "Đâu là hình thức xử phạt chính trong các hình thức xử phạt hành chính:",
    options: [
      "A. Cảnh cáo và phạt tiền",
      "B. Tước quyền sử dụng giấy phép và tịch thu tang vật phương tiện vi phạm",
      "Tất cả các đáp án trên đều đúng",
      "Cả A và B đều sai"
    ],
    correctIndex: 0,
    explanation: "Cảnh cáo và Phạt tiền luôn là hình thức xử phạt chính trong xử phạt vi phạm hành chính.",
    images: [
      "1792838986126_4639516480418908006_g5653112479445915767_acaec20cc35096625999031a44898765.jpg",
      "1792838986145_4639516480418908006_g5653112479445915767_913fa7c07c914bae513fbeb4e25f926c.jpg"
    ]
  },
  {
    id: 237,
    set: 2,
    number: 37,
    section: "Phần 4",
    question: "Hệ thống pháp luật của Nước CHXHCN Việt Nam hiện nay được chia thành mấy ngành:",
    options: [
      "A. 10 ngành",
      "B. 11 ngành",
      "C. 12 ngành",
      "D. 13 ngành"
    ],
    correctIndex: 2,
    explanation: "Theo chương trình Pháp luật đại cương, hệ thống pháp luật Việt Nam hiện nay được chia thành 12 ngành luật.",
    images: [
      "1792838986126_4639516480418908006_g5653112479445915767_acaec20cc35096625999031a44898765.jpg",
      "1792838986145_4639516480418908006_g5653112479445915767_913fa7c07c914bae513fbeb4e25f926c.jpg"
    ]
  },
  {
    id: 238,
    set: 2,
    number: 38,
    section: "Phần 4",
    question: "Khẳng định nào đúng:",
    options: [
      "A. ADPL là việc thực hiện pháp luật của công dân.",
      "B. ADPL là việc thực hiện pháp luật của CQNN và người có thẩm quyền.",
      "C. ADPL là việc thực hiện pháp luật của công dân, của CQNN và của người có thẩm quyền.",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 1,
    explanation: "Áp dụng pháp luật (ADPL) là hoạt động thực hiện pháp luật mang tính tổ chức, quyền lực nhà nước do Cơ quan nhà nước (CQNN) và người có thẩm quyền thực hiện.",
    images: [
      "1792838986145_4639516480418908006_g5653112479445915767_913fa7c07c914bae513fbeb4e25f926c.jpg",
      "1792838986163_4639516480418908006_g5653112479445915767_5d6f035a7e9f406046dec55b3650c160.jpg"
    ]
  },
  {
    id: 239,
    set: 2,
    number: 39,
    section: "Phần 4",
    question: "Quyết định áp dụng pháp luật:",
    options: [
      "A. Luôn mang tính chất cụ thể và cá biệt",
      "B. Được ban hành chỉ để giải quyết những trường hợp cá biệt - cụ thể",
      "C. Chỉ được thực hiện một lần và sẽ chấm dứt hiệu lực khi được thực hiện",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 3,
    explanation: "Văn bản/Quyết định áp dụng pháp luật mang tính cá biệt, cụ thể đối với từng chủ thể và vụ việc xác định, chỉ áp dụng một lần.",
    images: [
      "1792838986145_4639516480418908006_g5653112479445915767_913fa7c07c914bae513fbeb4e25f926c.jpg",
      "1792838986163_4639516480418908006_g5653112479445915767_5d6f035a7e9f406046dec55b3650c160.jpg"
    ]
  },
  {
    id: 240,
    set: 2,
    number: 40,
    section: "Phần 4",
    question: "Đặc điểm của văn bản quy phạm pháp luật:",
    options: [
      "A. Có tính bắt buộc chung",
      "B. Được áp dụng nhiều lần và lâu dài",
      "C. Cả A và B đều đúng.",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 2,
    explanation: "Văn bản quy phạm pháp luật chứa các quy tắc xử sự chung (tính bắt buộc chung) và được áp dụng nhiều lần trong thực tế cho đến khi hết hiệu lực.",
    images: ["1792838986163_4639516480418908006_g5653112479445915767_5d6f035a7e9f406046dec55b3650c160.jpg"]
  },
  {
    id: 241,
    set: 2,
    number: 41,
    section: "Phần 5",
    question: "Các biện pháp xử phạt bổ sung trong các biện pháp sử phạt hành chính:",
    options: [
      "A. Cảnh cáo, phạt tiền",
      "B. Cảnh cáo, tịch thu tang vật, phương tiện vi phạm",
      "C. Tước quyền sử dụng giấy phép, tịch thu tang vật, phương tiện vi phạm",
      "D. Phạt tiền, tước quyền sử dụng giấy phép"
    ],
    correctIndex: 2,
    explanation: "Tước quyền sử dụng giấy phép, chứng chỉ hành nghề có thời hạn và tịch thu tang vật, phương tiện vi phạm hành chính là các hình thức xử phạt bổ sung.",
    images: [
      "1792838986163_4639516480418908006_g5653112479445915767_5d6f035a7e9f406046dec55b3650c160.jpg",
      "1792838986182_4639516480418908006_g5653112479445915767_21e47de3ae3d0c360423360715d88e77.jpg"
    ]
  },
  {
    id: 242,
    set: 2,
    number: 42,
    section: "Phần 5",
    question: "Nguyên tắc xử phạt hành chính:",
    options: [
      "A. Có thể áp dụng nhiều biện pháp xử phạt chính và nhiều biện pháp xử phạt bổ sung",
      "B. Chỉ có thể áp dụng một biện pháp xử phạt chính và có thể áp dụng một hoặc nhiều nhiều biện pháp xử phạt bổ sung",
      "C. Chỉ có thể áp dụng một biện pháp xử bổ sung và có thể áp dụng một hoặc nhiều nhiều biện pháp xử phạt chính",
      "D. Chỉ có thể áp dụng một biện pháp xử phạt chính và một biện pháp xử phạt bổ sung"
    ],
    correctIndex: 1,
    explanation: "Đối với mỗi vi phạm hành chính, cá nhân, tổ chức vi phạm chỉ bị áp dụng một hình thức xử phạt chính; có thể bị áp dụng một hoặc nhiều hình thức xử phạt bổ sung.",
    images: ["1792838986182_4639516480418908006_g5653112479445915767_21e47de3ae3d0c360423360715d88e77.jpg"]
  },
  {
    id: 243,
    set: 2,
    number: 43,
    section: "Phần 5",
    question: "Tài sản theo ngành luật dân sự bao gồm:",
    options: [
      "A. Vật; Tiền",
      "B. Giấy tờ có giá; quyền tài sản",
      "C. Cả A và B đều đúng",
      "D. Cả A và B đều sai"
    ],
    correctIndex: 2,
    explanation: "Theo Điều 105 BLDS 2015: Tài sản là vật, tiền, giấy tờ có giá và quyền tài sản -> Cả A và B đều đúng.",
    images: ["1792838986201_4639516480418908006_g5653112479445915767_ef917e1ab962a53dec87369bfb9b1e0e.jpg"]
  },
  {
    id: 244,
    set: 2,
    number: 44,
    section: "Phần 5",
    question: "Phương pháp điều chỉnh của ngành luật dân sự có đặc điểm:",
    options: [
      "A. Bảo đảm sự bình đẳng về mặt pháp lý giữa các chủ thể",
      "B. Bảo đảm quyền tự định đoạt của các chủ thể",
      "C. Truy cứu trách nhiệm tài sản của những người có hành vi gây thiệt hại cho người khác nếu có đủ điều kiện quy định về việc bồi thường thiệt hại.",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 3,
    explanation: "Phương pháp điều chỉnh của luật dân sự bảo đảm sự bình đẳng pháp lý, quyền tự định đoạt của các chủ thể và trách nhiệm tài sản (bồi thường thiệt hại).",
    images: ["1792838986201_4639516480418908006_g5653112479445915767_ef917e1ab962a53dec87369bfb9b1e0e.jpg"]
  },
  {
    id: 245,
    set: 2,
    number: 45,
    section: "Phần 5",
    question: "Chủ thể của ngành luật dân sự bao gồm:",
    options: [
      "A. Cá nhân",
      "B. Cá nhân, pháp nhân",
      "C. Cá nhân, pháp nhân, tổ hợp tác",
      "D. Cá nhân, pháp nhân, tổ chức không phải pháp nhân"
    ],
    correctIndex: 3,
    wasWrongInImage: true,
    wrongSelectedInImage: "B. Cá nhân, pháp nhân",
    explanation: "Lưu ý câu bị sai (0/2) trong ảnh gốc: Trong ảnh chọn 'B. Cá nhân, pháp nhân' bị đánh dấu X đỏ (0/2 điểm). Theo giáo trình và Điều 101 BLDS 2015 (chủ thể trong quan hệ dân sự có sự tham gia của hộ gia đình, tổ hợp tác, tổ chức khác không có tư cách pháp nhân), đáp án đầy đủ của đề là 'D. Cá nhân, pháp nhân, tổ chức không phải pháp nhân'.",
    images: [
      "1792838986201_4639516480418908006_g5653112479445915767_ef917e1ab962a53dec87369bfb9b1e0e.jpg",
      "1792838986220_4639516480418908006_g5653112479445915767_b828de9a272341463caf25d3c8626f45.jpg"
    ]
  },
  {
    id: 246,
    set: 2,
    number: 46,
    section: "Phần 5",
    question: "Trong một quan hệ dân sự giữa cơ quan nhà nước và cá nhân là công dân:",
    options: [
      "A. Luôn thể hiện sự bất bình đẳng về địa vị pháp lý",
      "B. Luôn thể hiện sự bình đẳng về địa vị pháp lý",
      "C. Tùy từng trường hợp, có thể là bình đẳng hoặc không bình đẳng về địa vị pháp lý",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 1,
    explanation: "Khi tham gia vào quan hệ dân sự, mọi chủ thể (kể cả cơ quan nhà nước và công dân) đều luôn bình đẳng với nhau về địa vị pháp lý.",
    images: ["1792838986220_4639516480418908006_g5653112479445915767_b828de9a272341463caf25d3c8626f45.jpg"]
  },
  {
    id: 247,
    set: 2,
    number: 47,
    section: "Phần 5",
    question: "Trong quan hệ hành chính:",
    options: [
      "A. Các bên có sự bình đẳng về địa vị pháp lý",
      "B. Cả A, B và C đều sai",
      "C. Các bên không có sự bình đẳng về địa vị pháp lý",
      "D. Tùy từng trường hợp mà các bên có thể bình đẳng hoặc không bình đẳng về địa vị pháp lý"
    ],
    correctIndex: 2,
    explanation: "Quan hệ pháp luật hành chính sử dụng phương pháp mệnh lệnh - phục tùng nên các bên tham gia không có sự bình đẳng về địa vị pháp lý (một bên nhân danh quyền lực nhà nước ra mệnh lệnh, bên kia phải phục tùng).",
    images: [
      "1792838986220_4639516480418908006_g5653112479445915767_b828de9a272341463caf25d3c8626f45.jpg",
      "1792838986238_4639516480418908006_g5653112479445915767_473be851b325c2e1bac3aa50f9b7fedd.jpg"
    ]
  },
  {
    id: 248,
    set: 2,
    number: 48,
    section: "Phần 5",
    question: "Cá nhân trong ngành luật dân sự gồm:",
    options: [
      "A. Người VN",
      "B. Người nước ngoài",
      "C. Người không quốc tịch",
      "D. Cả A, B và C đều đúng"
    ],
    correctIndex: 3,
    explanation: "Chủ thể cá nhân trong luật dân sự bao gồm công dân Việt Nam, người nước ngoài và người không quốc tịch.",
    images: ["1792838986238_4639516480418908006_g5653112479445915767_473be851b325c2e1bac3aa50f9b7fedd.jpg"]
  },
  {
    id: 249,
    set: 2,
    number: 49,
    section: "Phần 5",
    question: "Đối tượng điều chỉnh của ngành luật dân sự:",
    options: [
      "A. Chỉ bao gồm các quan hệ tài sản",
      "B. Chỉ bao gồm các quan hệ nhân thân",
      "C. Cả các quan hệ tài sản và các quan hệ nhân thân",
      "D. Cả A, B và C đều sai"
    ],
    correctIndex: 2,
    explanation: "Đối tượng điều chỉnh của ngành luật dân sự bao gồm cả các quan hệ tài sản và các quan hệ nhân thân.",
    images: [
      "1792838986238_4639516480418908006_g5653112479445915767_473be851b325c2e1bac3aa50f9b7fedd.jpg",
      "1792838986257_4639516480418908006_g5653112479445915767_b4d792c3bdcdf908979152a8a45d8a61.jpg"
    ]
  },
  {
    id: 250,
    set: 2,
    number: 50,
    section: "Phần 5",
    question: "Tính chất của phương pháp mệnh lệnh – phục tùng trong ngành luật hành chính:",
    options: [
      "A. Hoạt động quản lý, hoạt động chấp hành - điều hành mang bản chất là tính quyền uy.",
      "B. Các bên tham gia quan hệ có địa vị không bình đẳng với nhau về ý chí: một bên đưa ra lệnh, bên kia phải phục tùng.",
      "C. Bảo đảm sự bình đẳng, quyền tự định đoạt về mặt pháp lý giữa các chủ thể. Truy cứu trách nhiệm tài sản của những người có hành vi gây thiệt hại cho người.",
      "D. Cả A và B đều đúng"
    ],
    correctIndex: 3,
    explanation: "Phương pháp mệnh lệnh - phục tùng của ngành luật hành chính thể hiện tính quyền uy trong quản lý điều hành (A) và sự bất bình đẳng về ý chí giữa các bên (B) -> Chọn D. Cả A và B đều đúng.",
    images: ["1792838986257_4639516480418908006_g5653112479445915767_b4d792c3bdcdf908979152a8a45d8a61.jpg"]
  }
];
