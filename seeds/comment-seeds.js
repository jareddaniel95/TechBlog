const { Comment } = require('../models');

const commentData = [
  {
    comment_content: 'This is the secret to rapidiously productize collaborative partnerships! Great work here.',
    user_id: 1,
    post_id: 4
  },
  {
    comment_content: 'I love the way you synergistically reconceptualize proactive "outside the box" thinking.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_content: 'Was this posted by an alien? What planet are you from?',
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: 'What the hell are you talking about',
    user_id: 4,
    post_id: 3
  },
  {
    comment_content: 'If you know, you know.',
    user_id: 5,
    post_id: 1
  },
  {
    comment_content: 'They obviously do not know.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_content: 'I\'m being trolled, right?',
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: 'Let us not devolve into chaos, friends.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_content: 'I\'m not your friend, guy.',
    user_id: 4,
    post_id: 1
  },
  {
    comment_content: 'A saddening thought, but an inevitable one.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_content: 'We all miss out on every adventure we do not take.',
    user_id: 3,
    post_id: 1
  },
  {
    comment_content: 'Exactly.',
    user_id: 1,
    post_id: 1
  },
  {
    comment_content: 'Keep up the energy!',
    user_id: 1,
    post_id: 6
  },
  {
    comment_content: 'Transcendence is the ultimate goal, but is it obtainable?',
    user_id: 2,
    post_id: 7
  },
  {
    comment_content: 'The better question is: Who are we?',
    user_id: 6,
    post_id: 7
  },
  {
    comment_content: 'We are pilgrims. We are walking the unknown. We are our own destiny.',
    user_id: 1,
    post_id: 7
  },
  {
    comment_content: 'Preach!',
    user_id: 2,
    post_id: 7
  },
  {
    comment_content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in lectus in sem convallis iaculis. Sed accumsan luctus magna, sit amet vulputate lorem gravida et. Curabitur pharetra nibh sit amet malesuada consequat. Fusce vitae enim felis. Vivamus nec viverra sapien. Curabitur vel faucibus turpis, in mollis orci. Cras posuere pellentesque justo, eget ultrices lorem. Aenean blandit imperdiet ipsum, ac eleifend dolor mattis ut. Vestibulum sed augue metus.

    Suspendisse ut augue iaculis, aliquet eros vitae, mollis arcu. Phasellus rutrum mollis turpis ut commodo. Phasellus id justo nisl. Nam faucibus diam nec purus vehicula auctor. Suspendisse et mauris vitae massa cursus aliquam. Nam venenatis vehicula mauris id imperdiet. Phasellus tincidunt eget felis at tristique. Maecenas odio lacus, pharetra a blandit vel, maximus finibus mi. Suspendisse et elit libero. Aenean venenatis risus at dui hendrerit maximus. Mauris pharetra mauris elementum facilisis commodo. Praesent eget libero lacus. Fusce cursus nisi in ex sagittis efficitur.
    
    Nunc magna lectus, ornare a placerat quis, bibendum sed dui. Cras vel lacus vel risus consequat maximus sit amet et nibh. In nec faucibus risus. Nullam ultricies faucibus risus, vitae finibus ex tempor gravida. Sed vitae sagittis lectus. Aliquam accumsan magna id leo sodales pellentesque. Sed ac sem purus. Integer iaculis ante et magna euismod consectetur. Nulla ullamcorper volutpat feugiat. Aenean in purus nec ante sagittis consequat vitae vel erat. Nulla vel ante faucibus, sagittis augue a, euismod justo. Morbi condimentum enim ut mi porttitor, at dapibus ipsum ornare. Mauris nec nibh ex. Fusce sed ultrices est, et aliquet nunc. Curabitur sed interdum urna. Nullam sit amet lorem vel libero mollis volutpat at ut risus.
    
    Aliquam tempus feugiat nibh, id gravida erat ornare eu. Sed convallis a diam eu mattis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce vitae convallis felis. Proin mattis ante in nulla semper, et tempor neque fermentum. Nullam vehicula fermentum velit nec tempor. Suspendisse vitae dignissim ante, in vehicula turpis. Donec non metus nec urna pellentesque consequat non tristique dolor.
    
    Cras suscipit, velit sit amet venenatis iaculis, mauris leo volutpat tortor, eu semper risus mauris at elit. Mauris neque nulla, commodo non facilisis ut, elementum in tortor. Vivamus bibendum quam quis sapien laoreet commodo. Mauris nisl lacus, placerat sed metus sed, cursus ultrices lacus. Fusce a pharetra est. Morbi ut tristique metus, ultricies facilisis mauris. Proin a ultricies velit, ac commodo lorem. Proin tempus dui sit amet tellus dapibus imperdiet. Cras hendrerit risus a orci gravida, egestas accumsan justo efficitur. Quisque at tellus id ligula finibus aliquam. Aenean fringilla ullamcorper libero quis malesuada. Mauris vulputate quis erat vel rutrum.
    
    Etiam et lobortis dui. Maecenas eget volutpat sapien, sit amet finibus urna. Integer sodales rutrum sapien, sit amet feugiat nulla laoreet quis. Fusce ac fermentum odio. Donec feugiat purus id aliquam tempus. Maecenas suscipit cursus tempus. Donec diam quam, iaculis eget orci sit amet, consequat viverra quam. Donec metus turpis, congue maximus dui at, cursus pellentesque ligula.
    
    Duis sagittis, diam eget condimentum mollis, elit diam elementum nunc, et euismod magna massa et enim. Vivamus mollis vulputate augue. Fusce vitae vulputate justo. Curabitur efficitur magna sed ullamcorper tempus. Nullam sit amet ipsum vitae enim aliquam tincidunt. Nulla varius efficitur consequat. Vivamus eleifend varius odio. Nunc imperdiet mollis quam, nec venenatis risus efficitur sit amet. Maecenas faucibus neque ac pharetra pulvinar.
    
    Suspendisse potenti. Aenean tortor ipsum, ultrices sit amet metus consequat, ornare elementum leo. Quisque ut est elementum, vestibulum turpis et, ultrices orci. Cras condimentum nulla vitae facilisis dictum. Cras tristique, orci eleifend suscipit tempor, libero orci cursus justo, id rutrum massa est quis mi. Ut auctor sed eros nec posuere. Praesent et dignissim sapien. Integer in tortor vel tellus condimentum faucibus eget in metus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras dolor dolor, viverra quis eros in, rutrum aliquam felis. Praesent facilisis tincidunt nisi, a eleifend orci eleifend nec. Duis aliquam ornare urna, id vestibulum sapien fringilla sit amet. Ut eu consequat tellus. Mauris semper tempus nisi vel tincidunt. Mauris ullamcorper efficitur odio sit amet varius. Nunc maximus, libero nec laoreet condimentum, turpis urna finibus purus, vel vehicula neque quam quis leo.
    
    Fusce bibendum erat ut erat vehicula viverra. Aenean porttitor suscipit efficitur. Vivamus rhoncus sodales urna at finibus. Curabitur eu felis in arcu sollicitudin viverra. Nulla dapibus purus quis tempor sollicitudin. Duis augue nunc, varius id suscipit ac, dignissim eget arcu. Donec vel hendrerit lacus. Aliquam id fringilla nisi. Suspendisse nec velit sodales, malesuada nisl sit amet, vehicula ante. Etiam ac purus id orci tempus congue id in augue. Aenean non hendrerit nisl. Integer nec justo tortor. Sed quis diam vel dui volutpat volutpat. Fusce consequat cursus mauris sed vestibulum. Sed diam ligula, semper eu porta a, dignissim nec nunc.
    
    Integer volutpat interdum tempor. Nullam fringilla leo ac libero faucibus, sed luctus ex vehicula. Nullam porta risus fermentum tincidunt fermentum. Aliquam finibus suscipit dictum. Maecenas elementum pharetra risus, vitae molestie lectus eleifend at. Ut urna arcu, pretium vitae magna id, placerat vulputate lacus. Donec consectetur libero mi, et aliquet diam sollicitudin ut. Morbi facilisis, nisl a pellentesque imperdiet, sapien diam suscipit risus, sit amet suscipit massa magna quis neque. Sed mauris diam, facilisis ut lobortis sit amet, finibus non quam. Duis commodo, ante nec pretium viverra, massa sem tincidunt urna, nec convallis justo enim eu velit. Aliquam erat volutpat. Mauris cursus blandit mauris. Maecenas a imperdiet ex, at imperdiet orci.`,
    user_id: 6,
    post_id: 4
  }
];

const seedCategories = () => Comment.bulkCreate(commentData);

module.exports = seedCategories;
