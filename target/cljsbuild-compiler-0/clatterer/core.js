// Compiled by ClojureScript 1.7.48 {}
goog.provide('clatterer.core');
goog.require('cljs.core');
goog.require('clojure.string');
if(typeof clatterer.core.PI !== 'undefined'){
} else {
clatterer.core.PI = Math.PI;
}
if(typeof clatterer.core.HALF_PI !== 'undefined'){
} else {
clatterer.core.HALF_PI = (clatterer.core.PI / (2));
}
if(typeof clatterer.core.$ !== 'undefined'){
} else {
clatterer.core.$ = jQuery;
}
Physijs.scripts.worker = "js/physijs_worker.js";
Physijs.scripts.ammo = "ammo.js";

clatterer.core.Sprite = {};

clatterer.core.setup = (function clatterer$core$setup(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$Sprite$setup$arity$1 == null)))){
return this$.clatterer$core$Sprite$setup$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.setup[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.setup["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Sprite.setup",this$);
}
}
}
});

clatterer.core.animate = (function clatterer$core$animate(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$Sprite$animate$arity$1 == null)))){
return this$.clatterer$core$Sprite$animate$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.animate[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.animate["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Sprite.animate",this$);
}
}
}
});


/**
* @constructor
* @param {*} mesh
* @param {*} pos
* @param {*} rot
* @param {*} force
* @param {*} need_force
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
clatterer.core.TextSprite = (function (mesh,pos,rot,force,need_force,__meta,__extmap,__hash){
this.mesh = mesh;
this.pos = pos;
this.rot = rot;
this.force = force;
this.need_force = need_force;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clatterer.core.TextSprite.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

clatterer.core.TextSprite.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k9531,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__9533 = (((k9531 instanceof cljs.core.Keyword))?k9531.fqn:null);
switch (G__9533) {
case "mesh":
return self__.mesh;

break;
case "pos":
return self__.pos;

break;
case "rot":
return self__.rot;

break;
case "force":
return self__.force;

break;
case "need-force":
return self__.need_force;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9531,else__5058__auto__);

}
});

clatterer.core.TextSprite.prototype.clatterer$core$Sprite$ = true;

clatterer.core.TextSprite.prototype.clatterer$core$Sprite$setup$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.mesh.collisions = (0);

self__.mesh.addEventListener("collision",((function (this$__$1){
return (function (other,linear_velocity,angular_velocity){
return cljs.core.reset_BANG_.call(null,self__.need_force,false);
});})(this$__$1))
);

self__.mesh.position.set(self__.pos.x,self__.pos.y,self__.pos.z);

self__.mesh.geometry.computeBoundingBox();

var max_9538 = self__.mesh.geometry.boundingBox.max;
var min_9539 = self__.mesh.geometry.boundingBox.min;
var x_9540 = (-0.5 * (max_9538.x - min_9539.x));
var y_9541 = (-0.5 * (max_9538.y - min_9539.y));
var z_9542 = (-0.5 * (max_9538.z - min_9539.z));
self__.mesh.geometry.applyMatrix((new THREE.Matrix4()).makeTranslation(x_9540,y_9541,z_9542));

return self__.mesh.rotation.set(self__.rot.x,self__.rot.y,self__.rot.z);
});

clatterer.core.TextSprite.prototype.clatterer$core$Sprite$animate$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.core.deref.call(null,self__.need_force))){
return self__.mesh.setLinearVelocity(self__.force);
} else {
return null;
}
});

clatterer.core.TextSprite.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#clatterer.core.TextSprite{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rot","rot",757545242),self__.rot],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"force","force",781957286),self__.force],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"need-force","need-force",2025500833),self__.need_force],null))], null),self__.__extmap));
});

clatterer.core.TextSprite.prototype.cljs$core$IIterable$ = true;

clatterer.core.TextSprite.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9530){
var self__ = this;
var G__9530__$1 = this;
return (new cljs.core.RecordIter((0),G__9530__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"rot","rot",757545242),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"need-force","need-force",2025500833)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clatterer.core.TextSprite.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

clatterer.core.TextSprite.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new clatterer.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,self__.__extmap,self__.__hash));
});

clatterer.core.TextSprite.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

clatterer.core.TextSprite.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

clatterer.core.TextSprite.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

clatterer.core.TextSprite.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"need-force","need-force",2025500833),null,new cljs.core.Keyword(null,"force","force",781957286),null,new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"mesh","mesh",456320595),null,new cljs.core.Keyword(null,"rot","rot",757545242),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new clatterer.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

clatterer.core.TextSprite.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__9530){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__9534 = cljs.core.keyword_identical_QMARK_;
var expr__9535 = k__5063__auto__;
if(cljs.core.truth_(pred__9534.call(null,new cljs.core.Keyword(null,"mesh","mesh",456320595),expr__9535))){
return (new clatterer.core.TextSprite(G__9530,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9534.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__9535))){
return (new clatterer.core.TextSprite(self__.mesh,G__9530,self__.rot,self__.force,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9534.call(null,new cljs.core.Keyword(null,"rot","rot",757545242),expr__9535))){
return (new clatterer.core.TextSprite(self__.mesh,self__.pos,G__9530,self__.force,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9534.call(null,new cljs.core.Keyword(null,"force","force",781957286),expr__9535))){
return (new clatterer.core.TextSprite(self__.mesh,self__.pos,self__.rot,G__9530,self__.need_force,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9534.call(null,new cljs.core.Keyword(null,"need-force","need-force",2025500833),expr__9535))){
return (new clatterer.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,G__9530,self__.__meta,self__.__extmap,null));
} else {
return (new clatterer.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__9530),null));
}
}
}
}
}
});

clatterer.core.TextSprite.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mesh","mesh",456320595),self__.mesh],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rot","rot",757545242),self__.rot],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"force","force",781957286),self__.force],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"need-force","need-force",2025500833),self__.need_force],null))], null),self__.__extmap));
});

clatterer.core.TextSprite.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__9530){
var self__ = this;
var this__5054__auto____$1 = this;
return (new clatterer.core.TextSprite(self__.mesh,self__.pos,self__.rot,self__.force,self__.need_force,G__9530,self__.__extmap,self__.__hash));
});

clatterer.core.TextSprite.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

clatterer.core.TextSprite.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mesh","mesh",2096852122,null),new cljs.core.Symbol(null,"pos","pos",775924307,null),new cljs.core.Symbol(null,"rot","rot",-1896890527,null),new cljs.core.Symbol(null,"force","force",-1872478483,null),new cljs.core.Symbol(null,"need-force","need-force",-628934936,null)], null);
});

clatterer.core.TextSprite.cljs$lang$type = true;

clatterer.core.TextSprite.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clatterer.core/TextSprite");
});

clatterer.core.TextSprite.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"clatterer.core/TextSprite");
});

clatterer.core.__GT_TextSprite = (function clatterer$core$__GT_TextSprite(mesh,pos,rot,force,need_force){
return (new clatterer.core.TextSprite(mesh,pos,rot,force,need_force,null,null,null));
});

clatterer.core.map__GT_TextSprite = (function clatterer$core$map__GT_TextSprite(G__9532){
return (new clatterer.core.TextSprite(new cljs.core.Keyword(null,"mesh","mesh",456320595).cljs$core$IFn$_invoke$arity$1(G__9532),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__9532),new cljs.core.Keyword(null,"rot","rot",757545242).cljs$core$IFn$_invoke$arity$1(G__9532),new cljs.core.Keyword(null,"force","force",781957286).cljs$core$IFn$_invoke$arity$1(G__9532),new cljs.core.Keyword(null,"need-force","need-force",2025500833).cljs$core$IFn$_invoke$arity$1(G__9532),null,cljs.core.dissoc.call(null,G__9532,new cljs.core.Keyword(null,"mesh","mesh",456320595),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"rot","rot",757545242),new cljs.core.Keyword(null,"force","force",781957286),new cljs.core.Keyword(null,"need-force","need-force",2025500833)),null));
});


clatterer.core.IWorld = {};

clatterer.core.spawn = (function clatterer$core$spawn(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$spawn$arity$1 == null)))){
return this$.clatterer$core$IWorld$spawn$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.spawn[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.spawn["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.spawn",this$);
}
}
}
});

clatterer.core.update_projector = (function clatterer$core$update_projector(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$update_projector$arity$1 == null)))){
return this$.clatterer$core$IWorld$update_projector$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.update_projector[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.update_projector["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.update-projector",this$);
}
}
}
});

clatterer.core.put_boundary = (function clatterer$core$put_boundary(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$put_boundary$arity$1 == null)))){
return this$.clatterer$core$IWorld$put_boundary$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.put_boundary[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.put_boundary["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.put-boundary",this$);
}
}
}
});

clatterer.core.put_plane = (function clatterer$core$put_plane(this$,pos,rot){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$put_plane$arity$3 == null)))){
return this$.clatterer$core$IWorld$put_plane$arity$3(this$,pos,rot);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.put_plane[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,pos,rot);
} else {
var m__5097__auto____$1 = (clatterer.core.put_plane["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,pos,rot);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.put-plane",this$);
}
}
}
});

clatterer.core.put_text = (function clatterer$core$put_text(this$,text){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$put_text$arity$2 == null)))){
return this$.clatterer$core$IWorld$put_text$arity$2(this$,text);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.put_text[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,text);
} else {
var m__5097__auto____$1 = (clatterer.core.put_text["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,text);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.put-text",this$);
}
}
}
});

clatterer.core.delete_old_text = (function clatterer$core$delete_old_text(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$delete_old_text$arity$1 == null)))){
return this$.clatterer$core$IWorld$delete_old_text$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.delete_old_text[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.delete_old_text["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.delete-old-text",this$);
}
}
}
});

clatterer.core.clear_texts = (function clatterer$core$clear_texts(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$clear_texts$arity$1 == null)))){
return this$.clatterer$core$IWorld$clear_texts$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.clear_texts[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.clear_texts["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.clear-texts",this$);
}
}
}
});

clatterer.core.render = (function clatterer$core$render(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$IWorld$render$arity$1 == null)))){
return this$.clatterer$core$IWorld$render$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.render[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.render["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IWorld.render",this$);
}
}
}
});


/**
* @constructor
* @param {*} border_length
* @param {*} scene
* @param {*} camera
* @param {*} light
* @param {*} renderer
* @param {*} controls
* @param {*} sprites
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
clatterer.core.World = (function (border_length,scene,camera,light,renderer,controls,sprites,__meta,__extmap,__hash){
this.border_length = border_length;
this.scene = scene;
this.camera = camera;
this.light = light;
this.renderer = renderer;
this.controls = controls;
this.sprites = sprites;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clatterer.core.World.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

clatterer.core.World.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k9547,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__9549 = (((k9547 instanceof cljs.core.Keyword))?k9547.fqn:null);
switch (G__9549) {
case "border-length":
return self__.border_length;

break;
case "scene":
return self__.scene;

break;
case "camera":
return self__.camera;

break;
case "light":
return self__.light;

break;
case "renderer":
return self__.renderer;

break;
case "controls":
return self__.controls;

break;
case "sprites":
return self__.sprites;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9547,else__5058__auto__);

}
});

clatterer.core.World.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#clatterer.core.World{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"border-length","border-length",1679736874),self__.border_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light","light",1918998747),self__.light],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprites","sprites",-1835833922),self__.sprites],null))], null),self__.__extmap));
});

clatterer.core.World.prototype.cljs$core$IIterable$ = true;

clatterer.core.World.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9546){
var self__ = this;
var G__9546__$1 = this;
return (new cljs.core.RecordIter((0),G__9546__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"border-length","border-length",1679736874),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"sprites","sprites",-1835833922)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clatterer.core.World.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

clatterer.core.World.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,self__.__hash));
});

clatterer.core.World.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

clatterer.core.World.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

clatterer.core.World.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

clatterer.core.World.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"border-length","border-length",1679736874),null,new cljs.core.Keyword(null,"controls","controls",1340701452),null,new cljs.core.Keyword(null,"renderer","renderer",336841071),null,new cljs.core.Keyword(null,"camera","camera",-1190348585),null,new cljs.core.Keyword(null,"light","light",1918998747),null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),null,new cljs.core.Keyword(null,"scene","scene",1523800415),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

clatterer.core.World.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__9546){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__9550 = cljs.core.keyword_identical_QMARK_;
var expr__9551 = k__5063__auto__;
if(cljs.core.truth_(pred__9550.call(null,new cljs.core.Keyword(null,"border-length","border-length",1679736874),expr__9551))){
return (new clatterer.core.World(G__9546,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9550.call(null,new cljs.core.Keyword(null,"scene","scene",1523800415),expr__9551))){
return (new clatterer.core.World(self__.border_length,G__9546,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9550.call(null,new cljs.core.Keyword(null,"camera","camera",-1190348585),expr__9551))){
return (new clatterer.core.World(self__.border_length,self__.scene,G__9546,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9550.call(null,new cljs.core.Keyword(null,"light","light",1918998747),expr__9551))){
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,G__9546,self__.renderer,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9550.call(null,new cljs.core.Keyword(null,"renderer","renderer",336841071),expr__9551))){
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,self__.light,G__9546,self__.controls,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9550.call(null,new cljs.core.Keyword(null,"controls","controls",1340701452),expr__9551))){
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,G__9546,self__.sprites,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9550.call(null,new cljs.core.Keyword(null,"sprites","sprites",-1835833922),expr__9551))){
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,G__9546,self__.__meta,self__.__extmap,null));
} else {
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__9546),null));
}
}
}
}
}
}
}
});

clatterer.core.World.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"border-length","border-length",1679736874),self__.border_length],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scene","scene",1523800415),self__.scene],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"camera","camera",-1190348585),self__.camera],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"light","light",1918998747),self__.light],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"renderer","renderer",336841071),self__.renderer],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"controls","controls",1340701452),self__.controls],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sprites","sprites",-1835833922),self__.sprites],null))], null),self__.__extmap));
});

clatterer.core.World.prototype.clatterer$core$IWorld$ = true;

clatterer.core.World.prototype.clatterer$core$IWorld$spawn$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
self__.scene.setGravity((new THREE.Vector3((0),(0),(0))));

self__.renderer.setClearColor((16777215));

self__.camera.position.set((0),(0),self__.border_length);

self__.scene.add(self__.light);

self__.scene.add((new THREE.AmbientLight((4473924))));

clatterer.core.put_boundary.call(null,this$__$1);

return clatterer.core.update_projector.call(null,this$__$1);
});

clatterer.core.World.prototype.clatterer$core$IWorld$update_projector$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var width = window.innerWidth;
var height = window.innerHeight;
self__.renderer.setSize(width,height);

self__.camera.aspect = (width / height);

return self__.camera.updateProjectionMatrix();
});

clatterer.core.World.prototype.clatterer$core$IWorld$render$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return ((function (this$__$1){
return (function clatterer$core$render_frame(){
self__.controls.update();

var pos_9574 = self__.camera.position;
self__.light.position.set(pos_9574.x,pos_9574.y,pos_9574.z).normalize();

var seq__9557_9575 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sprites));
var chunk__9558_9576 = null;
var count__9559_9577 = (0);
var i__9560_9578 = (0);
while(true){
if((i__9560_9578 < count__9559_9577)){
var sprite_9579 = cljs.core._nth.call(null,chunk__9558_9576,i__9560_9578);
clatterer.core.animate.call(null,sprite_9579);

var G__9580 = seq__9557_9575;
var G__9581 = chunk__9558_9576;
var G__9582 = count__9559_9577;
var G__9583 = (i__9560_9578 + (1));
seq__9557_9575 = G__9580;
chunk__9558_9576 = G__9581;
count__9559_9577 = G__9582;
i__9560_9578 = G__9583;
continue;
} else {
var temp__4425__auto___9584 = cljs.core.seq.call(null,seq__9557_9575);
if(temp__4425__auto___9584){
var seq__9557_9585__$1 = temp__4425__auto___9584;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9557_9585__$1)){
var c__5244__auto___9586 = cljs.core.chunk_first.call(null,seq__9557_9585__$1);
var G__9587 = cljs.core.chunk_rest.call(null,seq__9557_9585__$1);
var G__9588 = c__5244__auto___9586;
var G__9589 = cljs.core.count.call(null,c__5244__auto___9586);
var G__9590 = (0);
seq__9557_9575 = G__9587;
chunk__9558_9576 = G__9588;
count__9559_9577 = G__9589;
i__9560_9578 = G__9590;
continue;
} else {
var sprite_9591 = cljs.core.first.call(null,seq__9557_9585__$1);
clatterer.core.animate.call(null,sprite_9591);

var G__9592 = cljs.core.next.call(null,seq__9557_9585__$1);
var G__9593 = null;
var G__9594 = (0);
var G__9595 = (0);
seq__9557_9575 = G__9592;
chunk__9558_9576 = G__9593;
count__9559_9577 = G__9594;
i__9560_9578 = G__9595;
continue;
}
} else {
}
}
break;
}

self__.scene.simulate();

self__.renderer.render(self__.scene,self__.camera);

return requestAnimationFrame(clatterer$core$render_frame);
});})(this$__$1))
.call(null);
});

clatterer.core.World.prototype.clatterer$core$IWorld$put_boundary$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var half_border = (self__.border_length / (2));
var seq__9561 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(- half_border)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),half_border], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(- half_border),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clatterer.core.HALF_PI,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),half_border,(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [clatterer.core.HALF_PI,(0),(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- half_border),(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clatterer.core.HALF_PI,(0)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [half_border,(0),(0)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),clatterer.core.HALF_PI,(0)], null)], null)], null));
var chunk__9562 = null;
var count__9563 = (0);
var i__9564 = (0);
while(true){
if((i__9564 < count__9563)){
var vec__9565 = cljs.core._nth.call(null,chunk__9562,i__9564);
var pos = cljs.core.nth.call(null,vec__9565,(0),null);
var rot = cljs.core.nth.call(null,vec__9565,(1),null);
clatterer.core.put_plane.call(null,this$__$1,pos,rot);

var G__9596 = seq__9561;
var G__9597 = chunk__9562;
var G__9598 = count__9563;
var G__9599 = (i__9564 + (1));
seq__9561 = G__9596;
chunk__9562 = G__9597;
count__9563 = G__9598;
i__9564 = G__9599;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__9561);
if(temp__4425__auto__){
var seq__9561__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9561__$1)){
var c__5244__auto__ = cljs.core.chunk_first.call(null,seq__9561__$1);
var G__9600 = cljs.core.chunk_rest.call(null,seq__9561__$1);
var G__9601 = c__5244__auto__;
var G__9602 = cljs.core.count.call(null,c__5244__auto__);
var G__9603 = (0);
seq__9561 = G__9600;
chunk__9562 = G__9601;
count__9563 = G__9602;
i__9564 = G__9603;
continue;
} else {
var vec__9566 = cljs.core.first.call(null,seq__9561__$1);
var pos = cljs.core.nth.call(null,vec__9566,(0),null);
var rot = cljs.core.nth.call(null,vec__9566,(1),null);
clatterer.core.put_plane.call(null,this$__$1,pos,rot);

var G__9604 = cljs.core.next.call(null,seq__9561__$1);
var G__9605 = null;
var G__9606 = (0);
var G__9607 = (0);
seq__9561 = G__9604;
chunk__9562 = G__9605;
count__9563 = G__9606;
i__9564 = G__9607;
continue;
}
} else {
return null;
}
}
break;
}
});

clatterer.core.World.prototype.clatterer$core$IWorld$put_plane$arity$3 = (function (this$,pos,rot){
var self__ = this;
var this$__$1 = this;
var geometry = (new THREE.PlaneGeometry(self__.border_length,self__.border_length,(1),(1)));
var material = Physijs.createMaterial((new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"wireframe","wireframe",1009957322),false,new cljs.core.Keyword(null,"transparent","transparent",-2073609949),true,new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"color","color",1011675173),(14540253)], null)))),(0),0.7);
var mesh = (new Physijs.BoxMesh(geometry,material,(0)));
var vec__9567_9608 = pos;
var x_9609 = cljs.core.nth.call(null,vec__9567_9608,(0),null);
var y_9610 = cljs.core.nth.call(null,vec__9567_9608,(1),null);
var z_9611 = cljs.core.nth.call(null,vec__9567_9608,(2),null);
mesh.position.set(x_9609,y_9610,z_9611);

var vec__9568_9612 = rot;
var x_9613 = cljs.core.nth.call(null,vec__9568_9612,(0),null);
var y_9614 = cljs.core.nth.call(null,vec__9568_9612,(1),null);
var z_9615 = cljs.core.nth.call(null,vec__9568_9612,(2),null);
mesh.rotation.set(x_9613,y_9614,z_9615);

mesh.collisions = (0);

return self__.scene.add(mesh);
});

clatterer.core.World.prototype.clatterer$core$IWorld$put_text$arity$2 = (function (this$,text){
var self__ = this;
var this$__$1 = this;
if((cljs.core.count.call(null,cljs.core.deref.call(null,self__.sprites)) >= (300))){
clatterer.core.delete_old_text.call(null,this$__$1);
} else {
}

var size = (self__.border_length / (5));
var geometry = (new THREE.TextGeometry(text,cljs.core.clj__GT_js.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"curveSegments","curveSegments",-1293134970),new cljs.core.Keyword(null,"bevelEnabled","bevelEnabled",833782601),new cljs.core.Keyword(null,"bevelSize","bevelSize",-1203060022),new cljs.core.Keyword(null,"bevelThickness","bevelThickness",1360311084),new cljs.core.Keyword(null,"bevelSegments","bevelSegments",1785213485),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"weight","weight",-1262796205),new cljs.core.Keyword(null,"height","height",1025178622)],[(3),false,1.5,(2),(2),"helvetiker",size,"normal","bold",(50)]))));
var material = Physijs.createMaterial((new THREE.MeshPhongMaterial(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),((16777215) * Math.random()),new cljs.core.Keyword(null,"shading","shading",-637548494),THREE.SmoothShading], null)))),(0),0.2);
var mesh = (new Physijs.BoxMesh(geometry,material));
var camera_pos = self__.camera.position;
var sprite = (new clatterer.core.TextSprite(mesh,camera_pos.clone().multiplyScalar(0.45),self__.camera.rotation,camera_pos.clone().negate(),cljs.core.atom.call(null,true),null,null,null));
sprite.clatterer$core$Sprite$setup$arity$1(null);

cljs.core.swap_BANG_.call(null,self__.sprites,cljs.core.conj,sprite);

return self__.scene.add(mesh);
});

clatterer.core.World.prototype.clatterer$core$IWorld$clear_texts$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__9569_9616 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.sprites));
var chunk__9570_9617 = null;
var count__9571_9618 = (0);
var i__9572_9619 = (0);
while(true){
if((i__9572_9619 < count__9571_9618)){
var sprite_9620 = cljs.core._nth.call(null,chunk__9570_9617,i__9572_9619);
self__.scene.remove(cljs.core.get.call(null,sprite_9620,new cljs.core.Keyword(null,"mesh","mesh",456320595)));

var G__9621 = seq__9569_9616;
var G__9622 = chunk__9570_9617;
var G__9623 = count__9571_9618;
var G__9624 = (i__9572_9619 + (1));
seq__9569_9616 = G__9621;
chunk__9570_9617 = G__9622;
count__9571_9618 = G__9623;
i__9572_9619 = G__9624;
continue;
} else {
var temp__4425__auto___9625 = cljs.core.seq.call(null,seq__9569_9616);
if(temp__4425__auto___9625){
var seq__9569_9626__$1 = temp__4425__auto___9625;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9569_9626__$1)){
var c__5244__auto___9627 = cljs.core.chunk_first.call(null,seq__9569_9626__$1);
var G__9628 = cljs.core.chunk_rest.call(null,seq__9569_9626__$1);
var G__9629 = c__5244__auto___9627;
var G__9630 = cljs.core.count.call(null,c__5244__auto___9627);
var G__9631 = (0);
seq__9569_9616 = G__9628;
chunk__9570_9617 = G__9629;
count__9571_9618 = G__9630;
i__9572_9619 = G__9631;
continue;
} else {
var sprite_9632 = cljs.core.first.call(null,seq__9569_9626__$1);
self__.scene.remove(cljs.core.get.call(null,sprite_9632,new cljs.core.Keyword(null,"mesh","mesh",456320595)));

var G__9633 = cljs.core.next.call(null,seq__9569_9626__$1);
var G__9634 = null;
var G__9635 = (0);
var G__9636 = (0);
seq__9569_9616 = G__9633;
chunk__9570_9617 = G__9634;
count__9571_9618 = G__9635;
i__9572_9619 = G__9636;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.sprites,cljs.core.List.EMPTY);
});

clatterer.core.World.prototype.clatterer$core$IWorld$delete_old_text$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var sprite = cljs.core.last.call(null,cljs.core.deref.call(null,self__.sprites));
var updated_sprites = cljs.core.remove.call(null,((function (sprite,this$__$1){
return (function (p1__9545_SHARP_){
return cljs.core._EQ_.call(null,p1__9545_SHARP_,sprite);
});})(sprite,this$__$1))
,cljs.core.deref.call(null,self__.sprites));
self__.scene.remove(cljs.core.get.call(null,sprite,new cljs.core.Keyword(null,"mesh","mesh",456320595)));

return cljs.core.reset_BANG_.call(null,self__.sprites,updated_sprites);
});

clatterer.core.World.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__9546){
var self__ = this;
var this__5054__auto____$1 = this;
return (new clatterer.core.World(self__.border_length,self__.scene,self__.camera,self__.light,self__.renderer,self__.controls,self__.sprites,G__9546,self__.__extmap,self__.__hash));
});

clatterer.core.World.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

clatterer.core.World.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"border-length","border-length",-974698895,null),new cljs.core.Symbol(null,"scene","scene",-1130635354,null),new cljs.core.Symbol(null,"camera","camera",450182942,null),new cljs.core.Symbol(null,"light","light",-735437022,null),new cljs.core.Symbol(null,"renderer","renderer",1977372598,null),new cljs.core.Symbol(null,"controls","controls",-1313734317,null),new cljs.core.Symbol(null,"sprites","sprites",-195302395,null)], null);
});

clatterer.core.World.cljs$lang$type = true;

clatterer.core.World.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clatterer.core/World");
});

clatterer.core.World.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"clatterer.core/World");
});

clatterer.core.__GT_World = (function clatterer$core$__GT_World(border_length,scene,camera,light,renderer,controls,sprites){
return (new clatterer.core.World(border_length,scene,camera,light,renderer,controls,sprites,null,null,null));
});

clatterer.core.map__GT_World = (function clatterer$core$map__GT_World(G__9548){
return (new clatterer.core.World(new cljs.core.Keyword(null,"border-length","border-length",1679736874).cljs$core$IFn$_invoke$arity$1(G__9548),new cljs.core.Keyword(null,"scene","scene",1523800415).cljs$core$IFn$_invoke$arity$1(G__9548),new cljs.core.Keyword(null,"camera","camera",-1190348585).cljs$core$IFn$_invoke$arity$1(G__9548),new cljs.core.Keyword(null,"light","light",1918998747).cljs$core$IFn$_invoke$arity$1(G__9548),new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(G__9548),new cljs.core.Keyword(null,"controls","controls",1340701452).cljs$core$IFn$_invoke$arity$1(G__9548),new cljs.core.Keyword(null,"sprites","sprites",-1835833922).cljs$core$IFn$_invoke$arity$1(G__9548),null,cljs.core.dissoc.call(null,G__9548,new cljs.core.Keyword(null,"border-length","border-length",1679736874),new cljs.core.Keyword(null,"scene","scene",1523800415),new cljs.core.Keyword(null,"camera","camera",-1190348585),new cljs.core.Keyword(null,"light","light",1918998747),new cljs.core.Keyword(null,"renderer","renderer",336841071),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"sprites","sprites",-1835833922)),null));
});


clatterer.core.Application = {};

clatterer.core.start = (function clatterer$core$start(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$start$arity$1 == null)))){
return this$.clatterer$core$Application$start$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.start[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.start["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Application.start",this$);
}
}
}
});

clatterer.core.bind = (function clatterer$core$bind(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$bind$arity$1 == null)))){
return this$.clatterer$core$Application$bind$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.bind[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.bind["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Application.bind",this$);
}
}
}
});

clatterer.core.sound = (function clatterer$core$sound(this$,evt){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$sound$arity$2 == null)))){
return this$.clatterer$core$Application$sound$arity$2(this$,evt);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.sound[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,evt);
} else {
var m__5097__auto____$1 = (clatterer.core.sound["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Application.sound",this$);
}
}
}
});

clatterer.core.play_sound = (function clatterer$core$play_sound(this$,text){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$play_sound$arity$2 == null)))){
return this$.clatterer$core$Application$play_sound$arity$2(this$,text);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.play_sound[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,text);
} else {
var m__5097__auto____$1 = (clatterer.core.play_sound["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,text);
} else {
throw cljs.core.missing_protocol.call(null,"Application.play-sound",this$);
}
}
}
});

clatterer.core.clear = (function clatterer$core$clear(this$,evt){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$clear$arity$2 == null)))){
return this$.clatterer$core$Application$clear$arity$2(this$,evt);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.clear[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,evt);
} else {
var m__5097__auto____$1 = (clatterer.core.clear["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Application.clear",this$);
}
}
}
});

clatterer.core.keypress = (function clatterer$core$keypress(this$,evt){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$keypress$arity$2 == null)))){
return this$.clatterer$core$Application$keypress$arity$2(this$,evt);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.keypress[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$,evt);
} else {
var m__5097__auto____$1 = (clatterer.core.keypress["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Application.keypress",this$);
}
}
}
});

clatterer.core.message = (function clatterer$core$message(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$message$arity$1 == null)))){
return this$.clatterer$core$Application$message$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.message[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.message["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Application.message",this$);
}
}
}
});

clatterer.core.resize = (function clatterer$core$resize(this$){
if((!((this$ == null))) && (!((this$.clatterer$core$Application$resize$arity$1 == null)))){
return this$.clatterer$core$Application$resize$arity$1(this$);
} else {
var x__5096__auto__ = (((this$ == null))?null:this$);
var m__5097__auto__ = (clatterer.core.resize[goog.typeOf(x__5096__auto__)]);
if(!((m__5097__auto__ == null))){
return m__5097__auto__.call(null,this$);
} else {
var m__5097__auto____$1 = (clatterer.core.resize["_"]);
if(!((m__5097__auto____$1 == null))){
return m__5097__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Application.resize",this$);
}
}
}
});


/**
* @constructor
* @param {*} world
* @param {*} audio_map
* @param {*} mute
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
clatterer.core.Clatterer = (function (world,audio_map,mute,__meta,__extmap,__hash){
this.world = world;
this.audio_map = audio_map;
this.mute = mute;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
clatterer.core.Clatterer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5055__auto__,k__5056__auto__){
var self__ = this;
var this__5055__auto____$1 = this;
return cljs.core._lookup.call(null,this__5055__auto____$1,k__5056__auto__,null);
});

clatterer.core.Clatterer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5057__auto__,k9640,else__5058__auto__){
var self__ = this;
var this__5057__auto____$1 = this;
var G__9642 = (((k9640 instanceof cljs.core.Keyword))?k9640.fqn:null);
switch (G__9642) {
case "world":
return self__.world;

break;
case "audio-map":
return self__.audio_map;

break;
case "mute":
return self__.mute;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k9640,else__5058__auto__);

}
});

clatterer.core.Clatterer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5069__auto__,writer__5070__auto__,opts__5071__auto__){
var self__ = this;
var this__5069__auto____$1 = this;
var pr_pair__5072__auto__ = ((function (this__5069__auto____$1){
return (function (keyval__5073__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,cljs.core.pr_writer,""," ","",opts__5071__auto__,keyval__5073__auto__);
});})(this__5069__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__5070__auto__,pr_pair__5072__auto__,"#clatterer.core.Clatterer{",", ","}",opts__5071__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"world","world",-418292623),self__.world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),self__.audio_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mute","mute",1151223646),self__.mute],null))], null),self__.__extmap));
});

clatterer.core.Clatterer.prototype.cljs$core$IIterable$ = true;

clatterer.core.Clatterer.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__9639){
var self__ = this;
var G__9639__$1 = this;
return (new cljs.core.RecordIter((0),G__9639__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),new cljs.core.Keyword(null,"mute","mute",1151223646)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

clatterer.core.Clatterer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5053__auto__){
var self__ = this;
var this__5053__auto____$1 = this;
return self__.__meta;
});

clatterer.core.Clatterer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5049__auto__){
var self__ = this;
var this__5049__auto____$1 = this;
return (new clatterer.core.Clatterer(self__.world,self__.audio_map,self__.mute,self__.__meta,self__.__extmap,self__.__hash));
});

clatterer.core.Clatterer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5059__auto__){
var self__ = this;
var this__5059__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

clatterer.core.Clatterer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5050__auto__){
var self__ = this;
var this__5050__auto____$1 = this;
var h__4876__auto__ = self__.__hash;
if(!((h__4876__auto__ == null))){
return h__4876__auto__;
} else {
var h__4876__auto____$1 = cljs.core.hash_imap.call(null,this__5050__auto____$1);
self__.__hash = h__4876__auto____$1;

return h__4876__auto____$1;
}
});

clatterer.core.Clatterer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__5051__auto__,other__5052__auto__){
var self__ = this;
var this__5051__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4448__auto__ = other__5052__auto__;
if(cljs.core.truth_(and__4448__auto__)){
var and__4448__auto____$1 = (this__5051__auto____$1.constructor === other__5052__auto__.constructor);
if(and__4448__auto____$1){
return cljs.core.equiv_map.call(null,this__5051__auto____$1,other__5052__auto__);
} else {
return and__4448__auto____$1;
}
} else {
return and__4448__auto__;
}
})())){
return true;
} else {
return false;
}
});

clatterer.core.Clatterer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5064__auto__,k__5065__auto__){
var self__ = this;
var this__5064__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),null,new cljs.core.Keyword(null,"world","world",-418292623),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null),k__5065__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__5064__auto____$1),self__.__meta),k__5065__auto__);
} else {
return (new clatterer.core.Clatterer(self__.world,self__.audio_map,self__.mute,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__5065__auto__)),null));
}
});

clatterer.core.Clatterer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5062__auto__,k__5063__auto__,G__9639){
var self__ = this;
var this__5062__auto____$1 = this;
var pred__9643 = cljs.core.keyword_identical_QMARK_;
var expr__9644 = k__5063__auto__;
if(cljs.core.truth_(pred__9643.call(null,new cljs.core.Keyword(null,"world","world",-418292623),expr__9644))){
return (new clatterer.core.Clatterer(G__9639,self__.audio_map,self__.mute,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9643.call(null,new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),expr__9644))){
return (new clatterer.core.Clatterer(self__.world,G__9639,self__.mute,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__9643.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),expr__9644))){
return (new clatterer.core.Clatterer(self__.world,self__.audio_map,G__9639,self__.__meta,self__.__extmap,null));
} else {
return (new clatterer.core.Clatterer(self__.world,self__.audio_map,self__.mute,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__5063__auto__,G__9639),null));
}
}
}
});

clatterer.core.Clatterer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5067__auto__){
var self__ = this;
var this__5067__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"world","world",-418292623),self__.world],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),self__.audio_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"mute","mute",1151223646),self__.mute],null))], null),self__.__extmap));
});

clatterer.core.Clatterer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5054__auto__,G__9639){
var self__ = this;
var this__5054__auto____$1 = this;
return (new clatterer.core.Clatterer(self__.world,self__.audio_map,self__.mute,G__9639,self__.__extmap,self__.__hash));
});

clatterer.core.Clatterer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5060__auto__,entry__5061__auto__){
var self__ = this;
var this__5060__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__5061__auto__)){
return cljs.core._assoc.call(null,this__5060__auto____$1,cljs.core._nth.call(null,entry__5061__auto__,(0)),cljs.core._nth.call(null,entry__5061__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__5060__auto____$1,entry__5061__auto__);
}
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$ = true;

clatterer.core.Clatterer.prototype.clatterer$core$Application$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
clatterer.core.spawn.call(null,self__.world);

clatterer.core.bind.call(null,this$__$1);

clatterer.core.render.call(null,self__.world);

return clatterer.core.message.call(null,this$__$1);
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$bind$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
clatterer.core.$.call(null,"#sound-button").on("click",((function (this$__$1){
return (function (evt){
return clatterer.core.sound.call(null,this$__$1,evt);
});})(this$__$1))
);

clatterer.core.$.call(null,"#clear-button").on("click",((function (this$__$1){
return (function (evt){
return clatterer.core.clear.call(null,this$__$1,evt);
});})(this$__$1))
);

clatterer.core.$.call(null,document).keypress(((function (this$__$1){
return (function (evt){
return clatterer.core.keypress.call(null,this$__$1,evt);
});})(this$__$1))
);

clatterer.core.$.call(null,window).resize(((function (this$__$1){
return (function (evt){
return clatterer.core.resize.call(null,this$__$1);
});})(this$__$1))
);

return document.body.appendChild(new cljs.core.Keyword(null,"renderer","renderer",336841071).cljs$core$IFn$_invoke$arity$1(self__.world).domElement);
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$sound$arity$2 = (function (this$,evt){
var self__ = this;
var this$__$1 = this;
var $sound_button = clatterer.core.$.call(null,"#sound-button");
var $i = clatterer.core.$.call(null,"#sound-button > i");
var is_mute = $sound_button.hasClass("mute");
var vec__9646 = (cljs.core.truth_(is_mute)?(function (){
$sound_button.removeClass("mute");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa-volume-off","fa-volume-up"], null);
})()
:(function (){
$sound_button.addClass("mute");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["fa-volume-up","fa-volume-off"], null);
})()
);
var remove = cljs.core.nth.call(null,vec__9646,(0),null);
var add = cljs.core.nth.call(null,vec__9646,(1),null);
$i.removeClass(remove).addClass(add);

return cljs.core.reset_BANG_.call(null,self__.mute,cljs.core.not.call(null,is_mute));
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$play_sound$arity$2 = (function (this$,text){
var self__ = this;
var this$__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,self__.audio_map,text);
if(cljs.core.truth_(temp__4425__auto__)){
var audio_tag = temp__4425__auto__;
if(cljs.core.truth_(audio_tag.ended)){
} else {
audio_tag.pause();

audio_tag.currentTime = (0);
}

return audio_tag.play();
} else {
return null;
}
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$clear$arity$2 = (function (this$,evt){
var self__ = this;
var this$__$1 = this;
return clatterer.core.clear_texts.call(null,self__.world);
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$keypress$arity$2 = (function (this$,evt){
var self__ = this;
var this$__$1 = this;
var code = (cljs.core.truth_(evt)?evt.charCode:event.charCode);
if((code <= (32))){
return null;
} else {
var char$ = String.fromCharCode(code).toUpperCase();
if(cljs.core.truth_(cljs.core.deref.call(null,self__.mute))){
} else {
clatterer.core.play_sound.call(null,this$__$1,char$);
}

return clatterer.core.put_text.call(null,self__.world,char$);
}
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$message$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var $message = clatterer.core.$.call(null,"<div/>","message");
$message.text("Type something.").addClass("message").fadeIn((2000)).insertAfter("header");

return document.addEventListener("keypress",((function ($message,this$__$1){
return (function clatterer$core$remove_message(){
$message.remove();

return document.removeEventListener("keypress",clatterer$core$remove_message);
});})($message,this$__$1))
);
});

clatterer.core.Clatterer.prototype.clatterer$core$Application$resize$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return clatterer.core.update_projector.call(null,self__.world);
});

clatterer.core.Clatterer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"world","world",1222238904,null),new cljs.core.Symbol(null,"audio-map","audio-map",-258440845,null),new cljs.core.Symbol(null,"mute","mute",-1503212123,null)], null);
});

clatterer.core.Clatterer.cljs$lang$type = true;

clatterer.core.Clatterer.cljs$lang$ctorPrSeq = (function (this__5089__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"clatterer.core/Clatterer");
});

clatterer.core.Clatterer.cljs$lang$ctorPrWriter = (function (this__5089__auto__,writer__5090__auto__){
return cljs.core._write.call(null,writer__5090__auto__,"clatterer.core/Clatterer");
});

clatterer.core.__GT_Clatterer = (function clatterer$core$__GT_Clatterer(world,audio_map,mute){
return (new clatterer.core.Clatterer(world,audio_map,mute,null,null,null));
});

clatterer.core.map__GT_Clatterer = (function clatterer$core$map__GT_Clatterer(G__9641){
return (new clatterer.core.Clatterer(new cljs.core.Keyword(null,"world","world",-418292623).cljs$core$IFn$_invoke$arity$1(G__9641),new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372).cljs$core$IFn$_invoke$arity$1(G__9641),new cljs.core.Keyword(null,"mute","mute",1151223646).cljs$core$IFn$_invoke$arity$1(G__9641),null,cljs.core.dissoc.call(null,G__9641,new cljs.core.Keyword(null,"world","world",-418292623),new cljs.core.Keyword(null,"audio-map","audio-map",-1898972372),new cljs.core.Keyword(null,"mute","mute",1151223646)),null));
});

var width_9648 = window.innerWidth;
var height_9649 = window.innerHeight;
var camera_9650 = (new THREE.PerspectiveCamera((45),(width_9648 / height_9649),(1),(10000)));
var renderer_9651 = (new THREE.WebGLRenderer(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"antialias","antialias",-2073640634),true], null))));
var world_9652 = (new clatterer.core.World((function (){var x__4772__auto__ = width_9648;
var y__4773__auto__ = height_9649;
return ((x__4772__auto__ > y__4773__auto__) ? x__4772__auto__ : y__4773__auto__);
})(),(new Physijs.Scene()),camera_9650,(new THREE.DirectionalLight((16777215))),renderer_9651,(new THREE.OrbitControls(camera_9650)),cljs.core.atom.call(null,cljs.core.List.EMPTY),null,null,null));
var audio_map_9653 = (function (){var nodes = clatterer.core.$.call(null,"audio");
var length = nodes.length;
var i = (0);
var m = cljs.core.PersistentArrayMap.EMPTY;
while(true){
if((i < length)){
var tag = nodes.get(i);
var char$ = clojure.string.replace.call(null,tag.id,/audio-/,"");
var G__9654 = (i + (1));
var G__9655 = cljs.core.assoc.call(null,m,char$,tag);
i = G__9654;
m = G__9655;
continue;
} else {
return m;
}
break;
}
})();
clatterer.core.start.call(null,(new clatterer.core.Clatterer(world_9652,audio_map_9653,cljs.core.atom.call(null,false),null,null,null)));
